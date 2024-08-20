<script setup>
import LoadingAnimation from '../components/animations/Loading.vue';
import ContentAnimation from '../components/animations/Content.vue';
import Lenis from 'lenis'
import { onMounted, ref } from 'vue'

const showContent = ref(false)

onMounted(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {})

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
})

function displayContent() {
	showContent.value = true
}
</script>

<template>
    <main class="relative min-h-svh antialiased">
        <LoadingAnimation @finished="displayContent()" />

        <ContentAnimation v-if="showContent">
          <slot />
        </ContentAnimation>
    </main>
</template>

<style>
html.lenis, html.lenis body {
  height: auto;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}
</style>