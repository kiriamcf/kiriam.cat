<script setup>
const props = defineProps(['img', 'text', 'url'])
</script>

<template>
    <a :href="url" target="_blank" rel="noopener noreferrer"
        class="skill-card group bg-main-gray p-4 rounded-lg shadow-lg border border-main-gray-light flex flex-col items-center gap-4 hover:border-main-gray-extra-light hover:bg-main-gray-light transition-colors duration-300">
        <img :src="img + '.png'" :alt="text" class="h-20 rounded transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:scale-105">
        <span class="text-lg">{{ text }}</span>
    </a>
</template>
