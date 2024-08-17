<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps(['title'])

const title = ref(null)
const lineWidth = ref(0)

const calculateLineWidth = () => {
  if (title.value) {
    lineWidth.value = Math.floor(title.value.clientWidth * 0.4)
  }
}

onMounted(() => {
  calculateLineWidth()

  window.addEventListener('resize', calculateLineWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateLineWidth)
})
</script>

<template>
    <div class="relative mb-8">
        <h2 ref="title"
            class="text-4xl w-fit">
            {{ props.title }}
        </h2>
        <div class="absolute -bottom-2 h-0.5 bg-white rounded" :style="{'width': lineWidth + 'px'}"></div>
    </div>
</template>