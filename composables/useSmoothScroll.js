import { onMounted, onBeforeUnmount, watch } from 'vue'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../utils/motion'

gsap.registerPlugin(ScrollTrigger)

// Lenis smooth scroll driven by GSAP's ticker, so ScrollTrigger reads the same scroll position every frame.
// Scrolling stays locked until `enabled` is true, whether that happens before or after mount.
// With reduced motion the browser's native scrolling is kept (the loader is skipped there, so nothing to lock).
export function useSmoothScroll(enabled) {
    let lenis
    const tick = (time) => lenis.raf(time * 1000)

    onMounted(() => {
        window.scrollTo(0, 0)
        if (prefersReducedMotion()) return

        lenis = new Lenis()
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add(tick)
        gsap.ticker.lagSmoothing(0)

        if (!enabled.value) lenis.stop()
    })

    watch(enabled, (isEnabled) => isEnabled && lenis?.start())

    onBeforeUnmount(() => {
        gsap.ticker.remove(tick)
        lenis?.destroy()
    })
}
