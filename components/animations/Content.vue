<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const content = ref(null);

onMounted(() => {
    gsap.fromTo(content.value,
        { 
            y: "100svh",
        },
        { 
            duration: 0.5,
            y: 0,
            ease: "power4.out",
        },
    );
});
</script>

<template>
    <div ref="content" id="content">
        <slot />
    </div>
</template>