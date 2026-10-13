<script setup>
import LoadingAnimation from '../components/animations/Loading.vue';
import { provideLoader } from '../composables/useLoader'
import { useSmoothScroll } from '../composables/useSmoothScroll'

const { loaded, markLoaded } = provideLoader()
useSmoothScroll(loaded)
</script>

<template>
    <main class="relative min-h-svh antialiased">
        <LoadingAnimation @finished="markLoaded" />

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