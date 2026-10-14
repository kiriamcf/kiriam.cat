<script setup>
import portfolio from '../../public/portfolio.webp'
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

const facts = [
    { label: 'Based in', value: 'Manresa, Catalonia' },
    { label: 'Studied', value: 'ICT Systems Engineering at UPC' },
    { label: 'Off-screen', value: 'Rock climbing, my way to switch off' },
    { label: 'At home', value: 'Two cats and a dog. A bit chaotic but I wouldn\'t change it' },
]

const root = ref(null)
const lead = ref(null)
const photo = ref(null)

useGsap(root, () => {
    // The lead statement brightens letter by letter as it scrolls through, so it is read at the pace it appears
    const split = new SplitType(lead.value, { types: 'words, chars' })

    gsap.from(split.chars, {
        scrollTrigger: {
            trigger: lead.value,
            start: 'top 80%',
            end: 'bottom 50%',
            scrub: 0.5,
        },
        opacity: 0.2,
        stagger: 0.1,
    })

    // Facts follow as one small group once the lead is on screen
    gsap.from('.fact', {
        scrollTrigger: { trigger: '.facts', start: 'top 85%', once: true },
        y: 24,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'expo.out',
    })

    // Photo is uncovered from the bottom while it settles from a slight zoom
    gsap.timeline({ scrollTrigger: { trigger: photo.value, start: 'top 80%', once: true } })
        .fromTo(photo.value,
            { clipPath: 'inset(100% 0% 0% 0%)' },
            { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut', clearProps: 'clipPath' })
        .from('img', { scale: 1.3, duration: 1.8, ease: 'expo.out' }, 0)

    return () => split.revert()
})

</script>

<template>
    <section ref="root">
        <ContentTitle id="about-me" title="About me" />
        <!-- Photo sits a step below the lead on desktop, so the two columns never start on the same line -->
        <div class="grid gap-12 md:grid-cols-12 md:gap-x-8 md:gap-y-16">
            <p ref="lead" class="md:col-span-7 text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-balance">
                I'm Kiri, a {{ age }}-year-old developer who puts real <Highlight>care</Highlight> into every website.
            </p>
            <div ref="photo" class="md:col-span-5 md:row-span-2 md:mt-24 aspect-[4/5] overflow-hidden rounded-2xl">
                <img :src="portfolio" alt="Portrait of Kiriam" width="900" height="1331" loading="lazy" decoding="async" class="size-full object-cover">
            </div>
            <dl class="facts md:col-span-7 md:row-start-2 grid gap-8 sm:grid-cols-2 self-start">
                <div v-for="fact in facts" :key="fact.label" class="fact flex flex-col gap-1">
                    <dt class="text-white/50">{{ fact.label }}</dt>
                    <dd class="text-lg text-white/90 leading-snug max-w-[28ch]">{{ fact.value }}</dd>
                </div>
            </dl>
        </div>
    </section>
</template>
