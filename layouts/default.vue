<script setup>
import Lenis from 'lenis'
import { onMounted } from 'vue'

onMounted(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {})

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
})
</script>

<template>
    <main class="relative min-h-svh antialiased">
        <slot />
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

body {
  overflow: hidden;
}
</style>