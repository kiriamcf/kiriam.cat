// https://nuxt.com/docs/api/configuration/nuxt-config

const defaultTheme = require('tailwindcss/defaultTheme')

const siteUrl = 'https://kiriam.cat/'
const description = 'Kiriam Campobadal Forés, software engineer in Manresa, Catalonia. I build web apps end to end with Laravel, Vue and Tailwind CSS.'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/icon"],
  nitro: {
    preset: 'cloudflare_pages'
  },
  app: {
    head: {
      title: 'Kiriam Campobadal Forés · Software engineer',
      meta: [
        { name: 'description', content: description },
        // Safari's translucent toolbars and overscroll areas show the page background, so it must be dark too
        { name: 'theme-color', content: '#111111' },
        { name: 'color-scheme', content: 'dark' },
        // Link previews (LinkedIn, WhatsApp, Slack, X...)
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:site_name', content: 'Kiriam C. Forés' },
        { property: 'og:title', content: 'Kiriam Campobadal Forés · Software engineer' },
        { property: 'og:description', content: description },
        { property: 'og:image', content: `${siteUrl}og-image.png` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Kiri wordmark, with the text Kiriam Campobadal Forés, software engineer' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      htmlAttrs: { lang: 'en', class: 'bg-main-black' },
      bodyAttrs: { class: 'bg-main-black' },
      script: [
        // Structured data so search engines can tie the site, the name and the LinkedIn profile to one person
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Kiriam Campobadal Forés',
            alternateName: 'Kiri',
            jobTitle: 'Software engineer',
            url: siteUrl,
            email: 'mailto:soc@kiriam.cat',
            image: `${siteUrl}og-image.png`,
            address: { '@type': 'PostalAddress', addressLocality: 'Manresa', addressRegion: 'Catalonia', addressCountry: 'ES' },
            alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universitat Politècnica de Catalunya' },
            knowsAbout: ['Laravel', 'Livewire', 'MySQL', 'Vue.js', 'Inertia.js', 'Alpine.js', 'SolidJS', 'Tailwind CSS'],
            sameAs: ['https://www.linkedin.com/in/kiriam-campobadal-fores'],
          }),
        },
      ],
      link: [
        { rel: 'canonical', href: siteUrl },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' }
      ]
    }
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            main: {
              'black': '#111111',
              'red': '#fb5e75',
              'gray': {
                DEFAULT: '#131518',
                'light': '#1B1D20',
                'extra-light': '#2C2F34',
              }
            }
          },
          fontFamily: {
            'sans': ["Inter", ...defaultTheme.fontFamily.sans],
            'lato': "Lato"
          },
        },
      },
    }
  },
  googleFonts: {
    families: {
      Inter: true,
      Lato: true,
    },
    preload: true,
  }
})