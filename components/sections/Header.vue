<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Logo from '../icons/Logo.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const header = ref(null)
let trigger

// The header is a fixed overlay. On a page with a giant wordmark (marked data-hero-wordmark) the hero already
// carries the logo and links, so the header only slides in once that wordmark has scrolled under it.
// ScrollTrigger only toggles state here; the slide itself is a CSS transition, which reduced motion turns off.
onMounted(() => {
    const wordmark = document.querySelector('[data-hero-wordmark]')
    if (!wordmark) return header.value.classList.add('is-visible')

    trigger = ScrollTrigger.create({
        trigger: wordmark,
        start: 'bottom top+=64',
        onEnter: () => header.value.classList.add('is-visible'),
        onLeaveBack: () => header.value.classList.remove('is-visible'),
    })
})

onBeforeUnmount(() => trigger?.kill())
</script>

<template>
    <header ref="header" class="fixed inset-x-0 top-0 z-10 h-16 bg-main-black/80 backdrop-blur-md invisible -translate-y-full [&.is-visible]:visible [&.is-visible]:translate-y-0 transition-[transform,visibility] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none">
        <div class="max-w-screen-lg h-full mx-auto px-4 flex justify-between items-center">
            <Logo class="h-[1.3rem] w-auto" />
            <div class="flex gap-4 items-center">
                <a href="https://www.linkedin.com/in/kiriam-campobadal-fores" target="_blank" rel="noopener noreferrer" class="flex items-center" aria-label="LinkedIn">
                    <Icon name="mdi:linkedin" class="size-5" />
                </a>
                <a href="mailto:soc@kiriam.cat" class="flex items-center" aria-label="Email">
                    <Icon name="mdi:email" class="size-5" />
                </a>
            </div>
        </div>
    </header>
</template>
