<script setup>
const year = new Date().getFullYear()
</script>

<template>
    <footer class="max-w-screen-lg mx-auto mt-24 sm:mt-32 px-4 pt-8 pb-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center text-white/50">
        <p>© {{ year }} Kiriam C. Forés</p>
        <div class="flex gap-6">
            <a href="mailto:soc@kiriam.cat" class="rounded transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">soc@kiriam.cat</a>
            <a href="https://www.linkedin.com/in/kiriam-campobadal-fores" target="_blank" rel="noopener noreferrer" class="rounded transition-colors duration-300 hover:text-white focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">LinkedIn</a>
        </div>
    </footer>
</template>
