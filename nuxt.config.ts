export default defineNuxtConfig({
  css: ["@/assets/css/colors.css"],
  modules: ["@nuxtjs/color-mode", "nuxt-icon"],
  app: {
    head: {
      title: "GLIDER",
      meta: [
        {
          name: "description",
          content: "An app designed to replace all your social media",
        },
      ],
      link: [
        {
          hid: "icon",
          rel: "icon",
          type: "image/x-icon",
          href: "@/public/favicon.ico",
        },
      ],
    },
  },
});
