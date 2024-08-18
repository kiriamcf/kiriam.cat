<script setup>
import LoadingAnimation from './components/animations/Loading.vue';
import ContentAnimation from './components/animations/Content.vue';
import Header from './components/sections/Header.vue'
import Footer from './components/sections/Footer.vue'
import Hero from './components/sections/Hero.vue';
import AboutMe from './components/sections/AboutMe.vue';
import Skills from './components/sections/Skills.vue';
</script>

<template>
    <NuxtLayout>
        <LoadingAnimation />

        <ContentAnimation>
            <div class="relative bg-main-black">
                <div class="w-full text-white max-w-screen-2xl mx-auto">
                    <Header />
                    <div class="max-w-screen-lg mx-auto px-4 flex flex-col gap-16 sm:gap-32">
                        <Hero />
                        <AboutMe />
                        <Skills />
                    </div>
                    <Footer />
                </div>
            </div>
        </ContentAnimation>
    </NuxtLayout>
</template>