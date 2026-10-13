<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'
import { useGsap } from '../../composables/useGsap'

const props = defineProps(['title'])

const root = ref(null)

useGsap(root, () => {
    gsap.timeline({ scrollTrigger: { trigger: root.value, start: 'top 85%', once: true } })
        .from('.title-line', { yPercent: 110, duration: 1.2, ease: 'expo.out' })
        .from('.title-rule', { scaleX: 0, duration: 1, ease: 'expo.inOut' }, 0.15)
})
</script>

<template>
    <div ref="root" class="relative mb-8 w-fit">
        <h2 class="text-4xl overflow-hidden pb-[0.1em] -mb-[0.1em]">
            <span class="title-line block">{{ props.title }}</span>
        </h2>
        <div class="title-rule absolute -bottom-2 left-0 h-0.5 w-2/5 bg-white rounded origin-left"></div>
    </div>
</template>
