<script setup>
import ContentTitle from '../Text/ContentTitle.vue'
import Skill from '../cards/Skill.vue'
import { ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsap } from '../../composables/useGsap'

const skills = [
    { img: '/laravel', text: 'Laravel', url: 'https://laravel.com' },
    { img: '/vuejs', text: 'VueJS', url: 'https://vuejs.org' },
    { img: '/tailwindcss', text: 'TailwindCSS', url: 'https://tailwindcss.com' },
    { img: '/livewire', text: 'Livewire', url: 'https://laravel-livewire.com' },
    { img: '/alpinejs', text: 'AlpineJS', url: 'https://alpinejs.dev' },
    { img: '/mysql', text: 'MySQL', url: 'https://mysql.com' },
    { img: '/inertia', text: 'InertiaJS', url: 'https://inertiajs.com' },
    { img: '/solid', text: 'solidJS', url: 'https://solidjs.com' },
]

const root = ref(null)

useGsap(root, () => {
    gsap.set('.skill-card', { y: 60, autoAlpha: 0 })

    // Cards entering together (a whole grid row) rise as one staggered group
    ScrollTrigger.batch('.skill-card', {
        start: 'top 90%',
        once: true,
        onEnter: (cards) => gsap.to(cards, { y: 0, autoAlpha: 1, duration: 1.2, stagger: 0.08, ease: 'expo.out' }),
    })
})
</script>

<template>
    <section ref="root">
        <ContentTitle id="skills" title="Skills" />
        <p class="text-lg mb-6">Some of the technologies I've worked with:</p>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Skill v-for="skill in skills" :key="skill.text" v-bind="skill" />
        </div>
    </section>
</template>
