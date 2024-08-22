<script setup>
const props = defineProps(['img', 'text', 'url'])
</script>

<template>
    <a :href="url" target="__blank"
        class="bg-main-gray p-4 rounded-lg shadow-lg border border-main-gray-light flex flex-col items-center gap-4 hover:border-main-gray-extra-light transition-colors duration-300">
        <img :src="img + '.png'" :alt="text" class="h-20 rounded">
        <span class="text-lg">{{ text }}</span>
    </a>
</template>