import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from '../utils/motion'

gsap.registerPlugin(ScrollTrigger)

// Runs `setup` on mount inside a gsap.context scoped to `root`: selector strings only match inside the component,
// and every tween / ScrollTrigger created there is reverted on unmount (`setup` may return extra cleanup).
// With reduced motion nothing runs, so initial hidden states must be set here with GSAP, never with CSS classes.
export function useGsap(root, setup = () => {}) {
    let ctx

    onMounted(() => {
        if (prefersReducedMotion()) return
        ctx = gsap.context(setup, root.value)
    })

    onBeforeUnmount(() => ctx?.revert())

    // Animations created later (e.g. once the loader finishes) join the same scoped context
    return {
        run: (fn) => ctx?.add(fn),
    }
}
