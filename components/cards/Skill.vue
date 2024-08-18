<script setup>
const props = defineProps(['img', 'text'])
</script>

<template>
    <div class="bg-main-gray p-4 rounded-lg shadow-lg border border-main-gray-light flex flex-col items-center gap-4">
        <img :src="img + '.png'" :alt="text" class="h-20 rounded">
        <span class="text-lg">{{ text }}</span>
    </div>
</template>