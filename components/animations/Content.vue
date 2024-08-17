<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const content = ref(null);

onMounted(() => {
    const animation = gsap.timeline({ 
        delay: 2.55, 
        onStart: function() {
            content.value.style.display = "block";
        },
    });

    animation.fromTo(content.value,
        { 
            y: "100vh",
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