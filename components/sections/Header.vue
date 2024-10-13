<script setup>
import { onMounted, inject } from 'vue'
import { gsap } from 'gsap'

const loadingDelay = inject('loadingDelay')

onMounted(() => {
    gsap.to('header', {
        delay: loadingDelay + 0.6,
        opacity: 1, 
        duration: 1
    })
})

</script>

<template>
    <header class="p-4 sticky top-0 flex justify-between items-center z-10 bg-main-black/80 backdrop-blur-md h-16 opacity-0">
        <img src="/transparent-logo.png" alt="Logo" class="h-8">
        <div class="flex gap-2 items-center">
            <a href="https://www.linkedin.com/in/kiriam-campobadal-fores" target="_blank" class="flex items-center">
                <Icon name="mdi:linkedin" class="size-5" />
            </a>
            <a href="mailto:soc@kiriam.cat">Contact</a>
        </div>
    </header>
</template>