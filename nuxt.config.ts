// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: "viewport", content: "width=device-width, initial-scale=1.0"
        },
      ],
      script: [
        { src: "https://unpkg.com/@popperjs/core@2" },
        {
          src: "https://unpkg.com/tippy.js@6"
        }
      ],
      link: [
        {
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
          rel: "stylesheet"
        }
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
