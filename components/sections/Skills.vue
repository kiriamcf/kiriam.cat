<script setup>
import ContentTitle from '../Text/ContentTitle.vue'
import Skill from '../cards/Skill.vue'
</script>

<template>
    <section>
        <ContentTitle id="about-me" title="Skills" />
        <p class="text-lg mb-6">Some of the technologies I've worked with:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Skill img="/laravel" text="Laravel" url="https://laravel.com" />
            <Skill img="/vuejs" text="VueJS" url="https://vuejs.org" />
            <Skill img="/tailwindcss" text="TailwindCSS" url="https://tailwindcss.com" />
            <Skill img="/livewire" text="Livewire" url="https://laravel-livewire.com" />
            <Skill img="/alpinejs" text="AlpineJS" url="https://alpinejs.dev" />
            <Skill img="/mysql" text="MySQL" url="https://mysql.com" />
            <Skill img="/inertia" text="InertiaJS" url="https://inertiajs.com" />
            <Skill img="/solid" text="solidJS" url="https://solidjs.com" />
        </div>
    </section>
</template>