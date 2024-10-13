<script setup>
import LoadingAnimation from '../components/animations/Loading.vue';
import Lenis from 'lenis'
import { onMounted, provide } from 'vue'

provide('loadingDelay', 2.5)

onMounted(() => {
	// Lenis smooth scroll
    const lenis = new Lenis()
    lenis.on('scroll', (e) => {})

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

	// Scroll disable on load
	window.scrollTo(0, 0);
	lenis.stop();
	setTimeout(() => {
		lenis.start();
	}, 2500);
})
</script>

<template>
    <main class="relative min-h-svh antialiased">
        <LoadingAnimation />

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
</style>