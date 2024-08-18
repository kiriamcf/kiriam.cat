// https://nuxt.com/docs/api/configuration/nuxt-config

const defaultTheme = require('tailwindcss/defaultTheme')

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
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