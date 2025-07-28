<script setup>
import { Autoplay } from 'swiper/modules'

// Define the projects data
const projects = ref([
  {
    title: 'ConfluX Bot',
    description:
      'A cutting-edge Telegram bot designed for real-time transaction monitoring. Developed to automate real-time transaction monitoring, ConfluX extracts key transaction details from wallet trackers, detects confluence events, and forwards relevant information to designated channels.',
    link: 'https://t.me/solconf_bot',
    alt: 'ConfluX Bot logo',
    canvasImage: '/img/cx.png',
    ticon: 'Telegram',
    icon: 'mingcute:telegram-fill',
  },
  {
    title: 'Instagram Bot',
    description: `Utilizing Python Playwright library, this bot is designed to streamline various Instagram tasks. With
                  capabilities like logging in, posting photos and videos, as well as managing follow/unfollow
                  actions, it's built to run in a continuous loop, ensuring sustained activity and automation.`,
    link: 'https://github.com/Kianmhz/IG-bot',
    alt: 'ig logo',
    canvasImage: '/img/ig.png',
    ticon: 'Github',
    icon: 'codicon:github',
  },
  {
    title: 'X / Twitter Bot',
    description: `Engineered with Python Playwright library, Twitter Bot is equipped to handle tasks like
                  logging in, posting multimedia content, and following or
                  unfollowing users. Designed for long-term operations, it runs in an infinite loop, ensuring
                  consistent and reliable automation.`,
    link: 'https://github.com/Kianmhz/X-bot',
    alt: 'X logo',
    canvasImage: '/img/x.png',
    ticon: 'Github',
    icon: 'codicon:github',
  },
])

let worker

if (typeof window !== 'undefined') {
  worker = new Worker(new URL('./particleWorker.js', import.meta.url), {
    type: 'module',
  })
}

// Keep track of initialized canvases
const initializedCanvases = {}

const initOffscreenCanvas = (canvasId, canvasImageSrc) => {
  if (!worker) return

  const canvas = document.getElementById(canvasId)
  if (!canvas || initializedCanvases[canvasId]) return

  // Get the parent container's width and set canvas dimensions
  const parentElement = canvas.parentElement
  const width = parentElement.offsetWidth
  const height = parentElement.offsetHeight * 2

  canvas.width = width
  canvas.height = height

  const offscreen = canvas.transferControlToOffscreen()
  worker.postMessage({ canvas: offscreen, imageSrc: canvasImageSrc, width, height }, [
    offscreen,
  ])

  initializedCanvases[canvasId] = true
}


// Initialize canvases for the current and next slide
const initializeCanvases = (activeIndex) => {
  nextTick(() => {
    // Initialize current slide
    initOffscreenCanvas(
      `canvas-${activeIndex}`,
      projects.value[activeIndex].canvasImage
    )

    // Preload next slide if available
    if (projects.value[activeIndex + 1]) {
      initOffscreenCanvas(
        `canvas-${activeIndex + 1}`,
        projects.value[activeIndex + 1].canvasImage
      )
    }
  })
}

// Initialize the first slide on mount
onMounted(() => {
  initializeCanvases(0)
})
</script>

<template>
  <Swiper :modules="[Autoplay]" :pagination="{ dynamicBullets: true }" :slidesPerView="1" :loop="true"
    :autoplay="{ delay: 6000, disableOnInteraction: false }" :speed="500" @slide-change-transition-end="
      ({ activeIndex }) => initializeCanvases(activeIndex)
    ">
    <SwiperSlide v-for="(project, index) in projects" :key="index">
      <div class="my-20">
        <UContainer>
          <div
            class="grid grid-cols-1 justify-center items-center gap-10 sm:gap-20 text-center sm:grid-cols-2 sm:text-left">
            <div>
              <h1 class="text-3xl sm:text-4xl font-bold">
                {{ project.title }}
              </h1>
              <p class="text-md sm:text-lg my-5 text-[--secondary-text-color]">
                {{ project.description }}
              </p>
              <BaseButton :icon="project.icon" :title="project.ticon" :link="project.link" />
            </div>
            <div class="ml-auto max-sm:mx-auto">
              <canvas :id="`canvas-${index}`"></canvas>
            </div>
          </div>
        </UContainer>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
