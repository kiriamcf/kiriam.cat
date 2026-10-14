<script setup>
import Header from './components/sections/Header.vue'
import Footer from './components/sections/Footer.vue'
import Hero from './components/sections/Hero.vue';
import AboutMe from './components/sections/AboutMe.vue';
import Skills from './components/sections/Skills.vue';

// Without a pages/ directory Nuxt renders this for every URL. The site is a single page, so anything other than
// the root is a real 404; otherwise search engines index the home page under endless URLs (soft 404s)
if (useRoute().path !== '/') {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
    <NuxtLayout>
        <div class="relative bg-main-black">
            <div class="w-full text-white">
                <Header />
                <div class="max-w-screen-lg mx-auto px-4 flex flex-col gap-16 sm:gap-32">
                    <Hero />
                    <AboutMe />
                    <Skills />
                </div>
                <Footer />
            </div>
        </div>
    </NuxtLayout>
</template>