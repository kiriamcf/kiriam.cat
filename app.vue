<script setup>
import Layout from './components/Layout.vue';
import LoadingAnimation from './components/animations/Loading.vue';
import ContentAnimation from './components/animations/Content.vue';
import Header from './components/sections/Header.vue'
import Footer from './components/sections/Footer.vue'
import Hero from './components/sections/Hero.vue';
import AboutMe from './components/sections/AboutMe.vue';
</script>

<template>
    <Layout>
        <LoadingAnimation />

        <ContentAnimation>
            <div class="relative bg-main-black">
                <div class="w-full text-white max-w-screen-2xl mx-auto">
                    <Header />
                    <div class="max-w-screen-lg mx-auto px-4">
                        <Hero />
                        <AboutMe />
                    </div>
                    <Footer />
                </div>
            </div>
        </ContentAnimation>
    </Layout>
</template>