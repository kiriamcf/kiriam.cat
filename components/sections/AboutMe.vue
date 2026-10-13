<script setup>
import portfolio from '../../public/portfolio.jpg'
import ContentTitle from '../Text/ContentTitle.vue'
import Highlight from '../Text/Highlight.vue'
import { ref, computed } from 'vue'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { useGsap } from '../../composables/useGsap'

const birthDate = new Date(2001, 11, 21); // Note: December is month 11 (0-indexed)

const age = computed(() => {
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const hasBirthdayPassed = today.getMonth() > birthDate.getMonth() ||
                            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    return hasBirthdayPassed ? age : age - 1;
});

const root = ref(null)
const text = ref(null)
const photo = ref(null)

useGsap(root, () => {
    // All paragraphs brighten as one continuous sequence in reading order, so only one letter is ever "current"
    const splits = gsap.utils.toArray('.scroll-reveal').map((paragraph) => new SplitType(paragraph, { types: 'words, chars' }))

    gsap.from(splits.flatMap((split) => split.chars), {
        scrollTrigger: {
            trigger: text.value,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: 0.5,
        },
        opacity: 0.2,
        stagger: 0.1,
    })

    // Photo is uncovered from the bottom while it settles from a slight zoom
    gsap.timeline({ scrollTrigger: { trigger: photo.value, start: 'top 80%', once: true } })
        .fromTo(photo.value,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut', clearProps: 'clipPath' })
        .from('img', { scale: 1.3, duration: 1.8, ease: 'expo.out' }, 0)

    return () => splits.forEach((split) => split.revert())
})

</script>

<template>
    <section ref="root">
        <ContentTitle id="about-me" title="About me" />
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div ref="text" class="md:col-span-2 flex flex-col gap-7 text-lg">
                <p class="scroll-reveal">
                    Hello! My name is <Highlight>Kiriam</Highlight>, but people often call me <Highlight>Kiri</Highlight>. I am a {{ age }}-year-old full stack developer based in Manresa, Catalonia.
                </p>
                <p class="scroll-reveal">
                    I hold a degree in <Highlight>ICT Systems Engineering</Highlight> from the Polytechnic University of Catalonia (UPC).
                </p>
                <p class="scroll-reveal">
                    I'm all about crafting high-quality, well-designed websites—so much so that I haven't been replaced by A.I. yet.
                </p>
                <p class="scroll-reveal">
                    In my downtime, I enjoy rock climbing. It's a great way to relax and de-stress, providing a refreshing break from everyday routines.
                </p>
                <p class="scroll-reveal">
                    I have a strong affection for cats and share my home with two of them, along with one dog. Even though they sometimes make my life a bit <Highlight>chaotic</Highlight>, I wouldn't have it any other way.
                </p>
            </div>
            <div ref="photo" class="h-full w-fit mx-auto overflow-hidden rounded-md shadow-lg">
                <img :src="portfolio" alt="Portfolio Picture" class="h-full object-cover max-h-96 sm:max-h-none">
            </div>
        </div>
    </section>
</template>
