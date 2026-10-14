<script setup>
import Logo from '../icons/Logo.vue'
import CarretDown from '../icons/CarretDown.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { useGsap } from '../../composables/useGsap'
import { onLoaderFinished } from '../../composables/useLoader'

const hero = ref(null)
const shouldDisplayIcon = ref(true)

// The wordmark's own SVG box is the mask: letters wait below it, the K's leg waits further down its own axis
const { run } = useGsap(hero, () => {
    gsap.set('.logo-letter', { y: 150 })
    gsap.set('.logo-leg', { x: 45, y: 56 })
    gsap.set('.hero-line', { yPercent: 110 })
    gsap.set('.hero-cue', { yPercent: -100 })
})

// The logo assembles itself: letters rise in, and the leg slides up its own axis into the K, landing last.
// It starts just below the wordmark's edge so the whole slide is visible rather than a last-frame snap.
onLoaderFinished(() => run(() => {
    gsap.timeline({ delay: 0.15 })
        .to('.logo-letter', { y: 0, duration: 1.3, stagger: 0.07, ease: 'expo.out' })
        .to('.logo-leg', { x: 0, y: 0, duration: 0.9, ease: 'power3.inOut' }, 0.3)
        .to('.hero-line', { yPercent: 0, duration: 1.2, stagger: 0.08, ease: 'expo.out' }, 0.7)
        .add(scrollCueLoop(), 1.4)
}))

// Arrow drops in from the top of its mask, rests, then falls out the bottom
function scrollCueLoop() {
    return gsap.timeline({ repeat: -1, repeatDelay: 0.4 })
        .fromTo('.hero-cue', { yPercent: -100 }, { yPercent: 0, duration: 0.9, ease: 'expo.out' })
        .to('.hero-cue', { yPercent: 100, duration: 0.6, ease: 'expo.in' }, '+=0.8')
}

// The cue only makes sense while most of the hero is still on screen
let observer

onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
        shouldDisplayIcon.value = entry.intersectionRatio >= 0.6
    }, { threshold: 0.6 })

    observer.observe(hero.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
    <section ref="hero" id="hero" class="relative min-h-[100svh] flex flex-col justify-center py-12">
        <h1 data-hero-wordmark>
            <span class="sr-only">Kiriam Campobadal Forés, full stack developer</span>
            <Logo aria-hidden="true" class="w-full h-auto" />
        </h1>

        <div class="mt-8 sm:mt-12 grid gap-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <p class="overflow-hidden max-w-[36ch] text-lg sm:text-xl leading-relaxed text-white/70">
                <span class="hero-line block">Full stack developer in Manresa. I build web apps end to end, from the database to the last animation.</span>
            </p>
            <div class="overflow-hidden py-1">
                <div class="hero-line flex items-center gap-3">
                    <a href="mailto:soc@kiriam.cat" class="inline-flex items-center rounded-full bg-white px-7 py-3 font-medium text-main-black transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]">
                        Contact
                    </a>
                    <a href="https://www.linkedin.com/in/kiriam-campobadal-fores" target="_blank" rel="noopener noreferrer" class="inline-flex items-center rounded-full border border-white/25 px-6 py-3 font-medium text-white transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-white/60 active:scale-[0.98]">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>

        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 transition-opacity duration-500" :class="{ '!opacity-0': !shouldDisplayIcon }">
            <div class="overflow-hidden">
                <CarretDown class="hero-cue" />
            </div>
        </div>
    </section>
</template>
