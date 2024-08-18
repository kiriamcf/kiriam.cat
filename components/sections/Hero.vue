<script setup>
import CarretDown from '../icons/CarretDown.vue'
import { ref, onMounted } from 'vue'

const props = defineProps(['sectionToScroll'])
const shouldDisplayIcon = ref(true)

onMounted(() => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                shouldDisplayIcon.value = false
            } else {
                shouldDisplayIcon.value = true
            }
        });
    }, {
    root: null,
    threshold: 0.5
    });
    
    observer.observe(document.querySelector('#about-me'));
})

</script>

<template>
    <section class="min-h-[calc(100svh-4rem)] flex flex-col items-center justify-center relative">
        <h3 class="uppercase text-center sm:text-lg">kiriam campobadal forés</h3>
        <hr class="max-w-28 w-full mx-auto my-6">
        <h1 class="font-medium capitalize text-center text-6xl sm:text-7xl">full stack <span class="text-main-red">developer</span></h1>

        <div class="absolute bottom-4 right-1/2 translate-x-1/2 transition-opacity duration-500" :class="{'opacity-0': !shouldDisplayIcon}">
            <CarretDown class="animate-bounce" />
        </div>
    </section>
</template>