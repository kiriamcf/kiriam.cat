<script setup>
import ContentTitle from '../Text/ContentTitle.vue'
import Skill from '../cards/Skill.vue'
</script>

<template>
    <section>
        <ContentTitle id="about-me" title="Skills" />
        <p class="text-lg mb-6">Some of the technologies I've worked with:</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Skill img="/laravel" text="Laravel" />
            <Skill img="/vuejs" text="VueJS" />
            <Skill img="/tailwindcss" text="TailwindCSS" />
            <Skill img="/livewire" text="Livewire" />
            <Skill img="/alpinejs" text="AlpineJS" />
            <Skill img="/mysql" text="MySQL" />
            <Skill img="/inertia" text="InertiaJS" />
            <Skill img="/solid" text="solidJS" />
        </div>
    </section>
</template>