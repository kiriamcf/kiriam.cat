<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'
import { useGsap } from '../../composables/useGsap'
import { onLoaderFinished } from '../../composables/useLoader'

const header = ref(null)

const { run } = useGsap(header, () => {
    gsap.set(header.value, { yPercent: -100, autoAlpha: 0 })
})

onLoaderFinished(() => run(() => {
    gsap.to(header.value, { yPercent: 0, autoAlpha: 1, delay: 0.5, duration: 1.2, ease: 'expo.out' })
}))
</script>

<template>
    <header ref="header" class="sticky top-0 z-10 h-16 bg-main-black/80 backdrop-blur-md">
        <div class="max-w-screen-lg h-full mx-auto px-4 flex justify-between items-center">
            <img src="/transparent-logo.png" alt="Logo" class="h-8">
            <div class="flex gap-2 items-center">
                <a href="https://www.linkedin.com/in/kiriam-campobadal-fores" target="_blank" rel="noopener noreferrer" class="flex items-center">
                    <Icon name="mdi:linkedin" class="size-5" />
                </a>
                <a href="mailto:soc@kiriam.cat">Contact</a>
            </div>
        </div>
    </header>
</template>
