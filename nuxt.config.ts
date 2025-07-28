// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/fonts", "@nuxt/ui", 'nuxt-swiper', "nuxt-aos", "@nuxt/image", "@vueuse/nuxt"],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  image: {
    cloudflare: {
      baseURL: 'https://kianmhz.me' // Replace with your domain
    }
  },
  fonts: {
    families: [
      { name: 'Oxygen', provider: 'google' },
    ]
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: "Kianmhz – Portfolio of Kian Haddad",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Explore the portfolio of Kian Haddad (Kianmhz) — a software developer passionate about automation, clean UI, and innovative web solutions." },
        { property: "og:title", content: "Kianmhz – Portfolio of Kian Haddad" },
        { property: "og:type", content: "website" },
        { property: "og:description", content: "Driven by creativity and a passion for innovation, Kianmhz shares a journey of software projects built with care, curiosity, and a pursuit of excellence." },
        { property: "og:image", content: "/img/preview.webp" },
        { property: "og:url", content: "https://kianmhz.me" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "keywords", content: "Kianmhz, Kian Haddad, Kianmehr Haddad, software developer, web developer, automation, Nuxt, portfolio" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "canonical", href: "https://kianmhz.me" },

          // Favicons
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon-16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon-32x32.png" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
        { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon/android-chrome-192x192.png" },
        { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon/android-chrome-512x512.png" },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
    },
  },

  compatibilityDate: "2024-07-10",
});