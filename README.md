# kianmhz.me — Personal Portfolio

Source code for [kianmhz.me](https://kianmhz.me), a personal portfolio built with **Nuxt 4** and **Vue 3**. Designed to showcase projects, skills, and experience as a software developer.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Nuxt 4](https://nuxt.com) / [Vue 3](https://vuejs.org) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) · [Nuxt UI](https://ui.nuxt.com) |
| Fonts | [Nuxt Fonts](https://fonts.nuxt.com) — Oxygen (Google) |
| Icons | [@iconify/vue](https://iconify.design) |
| Images | [Nuxt Image](https://image.nuxt.com) — Cloudflare provider |
| Animations | [AOS](https://michalsnik.github.io/aos/) · [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) |
| Carousel | [nuxt-swiper](https://github.com/cpreston321/nuxt-swiper) |
| Utilities | [VueUse](https://vueuse.org) |
| Linting | ESLint ([nuxt/eslint-config](https://github.com/nuxt/eslint-config)) |

## Project Structure

```
pages/
  index.vue           # Single-page layout with all sections
components/
  base/
    Navbar.vue        # Scroll-aware fixed navbar with slide-in animation
    Footer.vue        # Minimal branded footer
    Button.vue        # Animated icon + label button
  Skillset.vue        # Mouse-proximity border effect skill cards
  Logos.vue           # Infinite marquee of tech stack icons
  Projects.vue        # Swiper carousel with offscreen canvas particle effect
  Cards.vue           # Stacked hover-reveal resume cards
  CharacterReveal.vue # Intersection observer line-by-line text reveal
  Contact.vue         # Contact links grid
  Slider.vue          # Holographic animated section divider
  Sign.vue            # SVG signature logo
composables/
  useNavigation.js    # Scroll direction detection for navbar hide/show
  useUtils.js         # throttle, debounce, clamp, lerp helpers
assets/css/
  main.css            # Global keyframe animations
```

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) v18+

```bash
# Install dependencies
npm install

# Start development server at http://localhost:3000
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
npm run lint:fix
```

## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for details.
