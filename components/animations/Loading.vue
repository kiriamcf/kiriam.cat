<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { prefersReducedMotion } from '../../utils/motion'

const emit = defineEmits(['finished'])

const words = ['Kiriam', 'Campobadal', 'Forés.']
// Each word's first letter and the trailing period survive the swap and collapse into "KCF."
const isInitial = (word, index) => index === 0 || index === word.length - 1 && word[index] === '.'

const overlay = ref(null)
const line = ref(null)
const counter = ref(null)

onMounted(async () => {
    if (prefersReducedMotion()) {
        gsap.set(overlay.value, { autoAlpha: 0 })
        emit('finished')
        return
    }

    // Never animate the fallback font: wait for Lato so letter widths are final before measuring
    await document.fonts.ready

    const q = gsap.utils.selector(overlay.value)
    const outs = q('.loader-out')
    const ins = q('.loader-in')
    const initials = q('.loader-initial')
    const offsets = convergeOffsets(initials)
    const progress = { value: 0 }
    const reveal = { t: 0 }

    gsap.set(ins, { yPercent: 100 })
    gsap.set(line.value, { autoAlpha: 1 })

    const tl = gsap.timeline({
        onComplete: () => gsap.set(overlay.value, { display: 'none' }),
    })

    // 1. Name rolls up into its masks while the counter runs
    tl.from(outs, { yPercent: 100, duration: 1.1, stagger: 0.02, ease: 'expo.out' })
      .from(counter.value, { yPercent: 100, duration: 1, ease: 'expo.out' }, 0)
      .to(progress, {
          value: 100,
          duration: 1.6,
          ease: 'power2.inOut',
          onUpdate: () => {
              counter.value.textContent = `${String(Math.round(progress.value)).padStart(3, '0')}%`
          },
      }, 0.2)

    // 2. Full name rolls out while the initials roll in at the exact same spots
      .addLabel('swap', '>+0.1')
      .to(outs, { yPercent: -100, duration: 1, stagger: 0.02, ease: 'expo.out' }, 'swap')
      .to(ins, { yPercent: 0, duration: 1, stagger: 0.02, ease: 'expo.out' }, 'swap+=0.1')
      .to(counter.value, { yPercent: -100, duration: 0.8, ease: 'expo.out' }, 'swap+=0.15')

    // 3. Initials accelerate into each other (expo.in = the "slam") and land as a solid "KCF."
      .addLabel('converge', 'swap+=0.8')
      .to(initials, { x: (i) => offsets[i], duration: 0.7, ease: 'expo.in' }, 'converge')

    // 4. The page rises from the bottom behind a bending edge, already underway during the slam.
    //    Its edge reaches the middle of the screen just after "KCF." lands and wipes it away with the overlay
      .addLabel('reveal', 'converge+=0.35')
      .to(reveal, { t: 1, duration: 1.2, ease: 'none', onUpdate: () => clipOverlay(reveal.t) }, 'reveal')
      .call(() => emit('finished'), null, 'reveal+=0.45')
})

const rise = gsap.parseEase('power4.inOut')
const bend = gsap.parseEase('power3.inOut')

// Clip the overlay above a curved edge: the edge climbs from the bottom while it bows down
// by up to 15% of the viewport, peaking mid-swipe and flattening out again by the end
function clipOverlay(t) {
    const p = rise(t)
    const b = bend(t)
    const bow = Math.min(2 * b, 2 * (1 - b)) * 15
    const points = []

    for (let i = 20; i >= 0; i--) {
        const u = i / 20
        const y = 100 * (1 - p) + bow * Math.sin(u * Math.PI + 0.25)
        points.push(`${u * 100}% ${y}%`)
    }

    overlay.value.style.clipPath = `polygon(0% 0%, 100% 0%, ${points.join(', ')})`
}

// Distance each initial must travel so they end up touching, centred on screen
function convergeOffsets(initials) {
    const rects = initials.map((el) => el.getBoundingClientRect())
    const total = rects.reduce((sum, r) => sum + r.width, 0)
    let left = (window.innerWidth - total) / 2

    return rects.map((r) => {
        const offset = left - r.left
        left += r.width
        return offset
    })
}
</script>

<template>
    <div ref="overlay" class="fixed inset-0 z-50 bg-white text-main-black font-lato overflow-hidden">
        <div class="relative w-full h-full flex justify-center items-center">
            <p
                ref="line"
                class="invisible flex gap-[0.25em] uppercase font-medium tracking-[-0.04em] leading-[1.2] text-[6.5vw] sm:text-[5vw]"
                aria-label="Kiriam Campobadal Forés."
            >
                <span v-for="word in words" :key="word" class="flex" aria-hidden="true">
                    <span
                        v-for="(char, i) in word"
                        :key="i"
                        class="relative block overflow-hidden"
                        :class="{ 'loader-initial': isInitial(word, i) }"
                    >
                        <span class="loader-out block">{{ char }}</span>
                        <span
                            v-if="isInitial(word, i)"
                            class="loader-in absolute inset-0 block"
                        >{{ char }}</span>
                    </span>
                </span>
            </p>

            <div class="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 overflow-hidden leading-none">
                <span ref="counter" class="block text-2xl sm:text-6xl font-medium tabular-nums tracking-tight">000%</span>
            </div>
        </div>
    </div>
</template>
