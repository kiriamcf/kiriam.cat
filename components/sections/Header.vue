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
    <header ref="header" class="p-4 sticky top-0 flex justify-between items-center z-10 bg-main-black/80 backdrop-blur-md h-16">
        <img src="/transparent-logo.png" alt="Logo" class="h-8">
        <div class="flex gap-2 items-center">
            <a href="https://www.linkedin.com/in/kiriam-campobadal-fores" target="_blank" class="flex items-center">
                <Icon name="mdi:linkedin" class="size-5" />
            </a>
            <a href="mailto:soc@kiriam.cat">Contact</a>
        </div>
    </header>
</template>
