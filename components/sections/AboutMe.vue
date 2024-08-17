<script setup>
import portfolio from '../../public/portfolio.jpg'
import ContentTitle from '../Text/ContentTitle.vue'
import Highlight from '../Text/Highlight.vue'
import { computed } from 'vue'

const birthDate = new Date(2001, 11, 21); // Note: December is month 11 (0-indexed)

const age = computed(() => {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() ||
                            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    return hasBirthdayPassed ? age : age - 1;
});

</script>

<template>
    <div class="my-16">
        <ContentTitle id="about-me" title="About me" />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div class="md:col-span-2 text-lg flex flex-col gap-4">
                <p>Hello! My name is <Highlight>Kiriam</Highlight>, but people often call me <Highlight>Kiri</Highlight>. I am a {{ age }}-year-old full stack developer based in Manresa, Catalonia.</p>
                <p>I hold a degree in <Highlight>ICT Systems Engineering</Highlight> from the Polytechnic University of Catalonia (UPC).</p>
                <p>I'm all about crafting high-quality, well-designed websites—so much so that I haven't been replaced by A.I. yet.</p>
                <p>In my downtime, I enjoy rock climbing. It's a great way to relax and de-stress, providing a refreshing break from everyday routines.</p>
                <p>I have a strong affection for cats and share my home with two of them, along with one dog. Even though they sometimes make my life a bit <Highlight>chaotic</Highlight>, I wouldn't have it any other way.</p>
            </div>
            <img :src="portfolio" alt="Portfolio Picture" class="shadow-lg rounded-md h-full object-cover max-h-96 sm:max-h-none mx-auto">
        </div>
    </div>
</template>