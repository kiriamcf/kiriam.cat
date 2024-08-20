<script setup>
import { ref, reactive, onMounted, defineEmits } from 'vue'
import { gsap } from 'gsap'
import { TextPlugin } from "gsap/TextPlugin";

const emit = defineEmits(['finished']);
const textElement = ref(null);

gsap.registerPlugin(TextPlugin)

const tweened = reactive({
  number: 0
})

onMounted(() => {
    setTimeout(()=>{
        emit('finished')
    },2600);

    const animation = gsap.timeline();

    animation.to(tweened, { duration: 1, number: 100 });

    gsap.to('#percentage', { delay: 1, opacity: 0, duration: 1, ease: 'power4.out' });

    animation.to('.hide', { y: -75, duration: 0.75, ease: 'power4.out', stagger: 0.02 });

    const fontSize = parseFloat(window.getComputedStyle(textElement.value).fontSize) * 0.8
    const offsets = [-fontSize, 0, fontSize, 2*fontSize];
    
    animation.to('.show', { 
        x: (index, target) => {
            const middlePoint = window.innerWidth / 2;
            const currentLeft = target.offsetLeft + target.clientWidth / 2;
            return middlePoint - currentLeft + offsets[index];
        },
        duration: 0.75,
        ease: 'circ.inOut',
    });
});
</script>

<template>
    <div class="fixed inset-0 -z-10 font-lato">
        <div class="relative w-full h-full flex justify-center items-center">
            <p ref="textElement" class="inline-flex whitespace-pre text-2xl sm:text-6xl font-medium overflow-hidden">
                <span class="show">K</span>
                <span class="hide">i</span>
                <span class="hide">r</span>
                <span class="hide">i</span>
                <span class="hide">a</span>
                <span class="hide">m</span>
                &nbsp;
                <span class="show">C</span>
                <span class="hide">a</span>
                <span class="hide">m</span>
                <span class="hide">p</span>
                <span class="hide">o</span>
                <span class="hide">b</span>
                <span class="hide">a</span>
                <span class="hide">d</span>
                <span class="hide">a</span>
                <span class="hide">l</span>
                &nbsp;
                <span class="show">F</span>
                <span class="hide">o</span>
                <span class="hide">r</span>
                <span class="hide">é</span>
                <span class="hide">s</span>
                <span class="show">.</span>   
            </p>
            <div id="percentage" class="absolute bottom-4 right-4 text-2xl sm:text-3xl">
                <span>{{ tweened.number.toFixed() }}</span>
                <span>%</span>
            </div>
        </div>
    </div>
</template>