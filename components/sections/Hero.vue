<script setup>
import CarretDown from '../icons/CarretDown.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { useGsap } from '../../composables/useGsap'
import { onLoaderFinished } from '../../composables/useLoader'

const hero = ref(null)
const shouldDisplayIcon = ref(true)

// Hidden under the loader until it finishes, same mask language as the loader's letters
const { run } = useGsap(hero, () => {
    gsap.set('.hero-line', { yPercent: 110 })
    gsap.set('hr', { scaleX: 0 })
    gsap.set('.hero-cue', { yPercent: -100 })
})

onLoaderFinished(() => run(() => {
    gsap.timeline()
        .to('.hero-line', { yPercent: 0, duration: 1.4, stagger: 0.1, ease: 'expo.out' })
        .to('hr', { scaleX: 1, duration: 1.2, ease: 'expo.inOut' }, 0.1)
        .add(scrollCueLoop(), 1.2)
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
    <section ref="hero" id="hero" class="min-h-[calc(100svh-4rem)] flex flex-col items-center justify-center relative">
        <h3 class="uppercase text-center sm:text-lg">
            <span class="block overflow-hidden"><span class="hero-line block">kiriam campobadal forés</span></span>
        </h3>
        <hr class="max-w-28 w-full mx-auto my-6">
        <h1 class="font-medium capitalize text-center text-6xl sm:text-7xl flex flex-wrap justify-center gap-x-[0.25em]">
            <span class="inline-block overflow-hidden py-[0.1em] -my-[0.1em]"><span class="hero-line inline-block">full stack</span></span>
            <span class="inline-block overflow-hidden py-[0.1em] -my-[0.1em]"><span class="hero-line inline-block text-main-red">developer</span></span>
        </h1>

        <div class="absolute bottom-4 right-1/2 translate-x-1/2 transition-opacity duration-500" :class="{'!opacity-0': !shouldDisplayIcon}">
            <div class="overflow-hidden">
                <CarretDown class="hero-cue" />
            </div>
        </div>
    </section>
</template>
