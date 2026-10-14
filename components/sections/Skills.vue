<script setup>
import ContentTitle from '../Text/ContentTitle.vue'
import { ref } from 'vue'
import { gsap } from 'gsap'
import { useGsap } from '../../composables/useGsap'

// Grouped by layer, echoing the hero's "from the database to the last animation"
const groups = [
    {
        name: 'Backend',
        skills: [
            { icon: 'simple-icons:laravel', text: 'Laravel', url: 'https://laravel.com' },
            { icon: 'simple-icons:livewire', text: 'Livewire', url: 'https://livewire.laravel.com' },
            // Simple Icons' MySQL glyph includes the wordmark, unreadable at icon size; devicon has the bare dolphin
            { icon: 'devicon-plain:mysql', text: 'MySQL', url: 'https://mysql.com' },
        ],
    },
    {
        name: 'Frontend',
        skills: [
            { icon: 'simple-icons:vuedotjs', text: 'Vue', url: 'https://vuejs.org' },
            { icon: 'simple-icons:inertia', text: 'Inertia', url: 'https://inertiajs.com' },
            { icon: 'simple-icons:alpinedotjs', text: 'Alpine', url: 'https://alpinejs.dev' },
            { icon: 'simple-icons:solid', text: 'Solid', url: 'https://solidjs.com' },
            { icon: 'simple-icons:tailwindcss', text: 'Tailwind CSS', url: 'https://tailwindcss.com' },
        ],
    },
]

const root = ref(null)

useGsap(root, () => {
    // Each layer's names rise out of their masks together, in reading order
    gsap.utils.toArray('.skill-group').forEach((group) => {
        gsap.from(group.querySelectorAll('.skill-line'), {
            scrollTrigger: { trigger: group, start: 'top 85%', once: true },
            yPercent: 110,
            duration: 1.2,
            stagger: 0.06,
            ease: 'expo.out',
        })
    })
})
</script>

<template>
    <section ref="root">
        <ContentTitle id="skills" title="Skills" />
        <div class="flex flex-col gap-12 sm:gap-16">
            <div v-for="group in groups" :key="group.name" class="skill-group grid gap-4 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-8">
                <h3 class="text-white/50 md:pt-[0.9rem]">{{ group.name }}</h3>
                <!-- Hovering one name dims the rest, so the list reads as a single object -->
                <ul class="group/list flex flex-wrap gap-x-[0.45em] gap-y-1 text-4xl sm:text-6xl font-medium tracking-tight">
                    <li v-for="skill in group.skills" :key="skill.text" class="overflow-hidden py-[0.1em] -my-[0.1em]">
                        <a :href="skill.url" target="_blank" rel="noopener noreferrer"
                            class="skill-line group inline-flex items-center gap-[0.25em] leading-[1.1] rounded-md transition-colors duration-300 group-hover/list:text-white/30 hover:!text-white focus-visible:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                            <Icon :name="skill.icon" class="size-[0.6em] shrink-0 transition-[transform,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[0.06em] group-hover:text-main-red" />
                            <span class="whitespace-nowrap">{{ skill.text }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
