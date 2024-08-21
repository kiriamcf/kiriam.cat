// https://nuxt.com/docs/api/configuration/nuxt-config

const defaultTheme = require('tailwindcss/defaultTheme')

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/icon"],
  nitro: {
    preset: 'cloudflare_pages'
  },
  app: {
    head: {
      title: 'Kiriam C. Forés',
      link: [
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
                'light': '#1B1D20'
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
    }
  }
})