<script setup>
import Logo from './components/icons/Logo.vue'

const props = defineProps(['error'])

const isNotFound = props.error?.statusCode === 404

useHead({ title: isNotFound ? 'Page not found · Kiriam C. Forés' : 'Something went wrong · Kiriam C. Forés' })
</script>

<!-- Rendered by Nuxt in place of app.vue, so it skips the loader and smooth scroll and stays a plain page -->
<template>
    <main class="min-h-svh max-w-screen-lg mx-auto px-4 py-12 flex flex-col justify-between text-white antialiased">
        <a href="/" aria-label="Kiri, back to the home page" class="w-fit rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
            <Logo class="h-[1.3rem] w-auto" />
        </a>
        <div class="flex flex-col gap-6">
            <h1 class="text-4xl sm:text-6xl font-medium tracking-tight leading-[1.1] text-balance">
                {{ isNotFound ? 'This page doesn\'t exist.' : 'Something went wrong.' }}
            </h1>
            <a href="/" class="w-fit inline-flex items-center rounded-full bg-white px-7 py-3 font-medium text-main-black transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]">
                Back home
            </a>
        </div>
        <p class="text-white/50">{{ props.error?.statusCode }}</p>
    </main>
</template>
