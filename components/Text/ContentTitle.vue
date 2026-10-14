<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'
import { useGsap } from '../../composables/useGsap'

const props = defineProps(['title'])

const root = ref(null)

useGsap(root, () => {
    gsap.from('.title-line', {
        scrollTrigger: { trigger: root.value, start: 'top 85%', once: true },
        yPercent: 110,
        duration: 1.2,
        ease: 'expo.out',
    })
})
</script>

<!-- A quiet label: the section's own display type carries the weight, like the hero's wordmark -->
<template>
    <div ref="root" class="mb-8 sm:mb-12">
        <h2 class="overflow-hidden text-base text-white/50">
            <span class="title-line block">{{ props.title }}</span>
        </h2>
    </div>
</template>
