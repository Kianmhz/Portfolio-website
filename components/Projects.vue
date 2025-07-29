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
    title: 'Synps',
    description: `A unified Web3 intelligence terminal that aggregates and analyzes blockchain data, social sentiment, and market signals in real-time. Designed to reduce noise and surface alpha, Synps leverages AI to assess live crypto news, trending projects, investment rounds, and wallet behavior.
From radar-style dashboards to predictive confluence detectors, each module transforms raw data into actionable insights — creating a powerful assistant for informed, real-time decision-making across the crypto ecosystem.`,
    link: 'https://synps.app/',
    alt: 'Synps logo',
    canvasImage: '/img/synps.png',
    ticon: 'Website',
    icon: 'mdi:web',
  },
  {
    title: 'FLOW Field Project',
    description: `A visual exploration of particle behavior guided by directional vector fields. Built to experiment with motion aesthetics and flow dynamics, FLOW utilizes smooth field functions to simulate natural movement across canvas space. The project transforms static shapes into animated, living visuals — creating a foundation for generative art and real-time interactions.`,
    link: 'https://github.com/Kianmhz/Flow-fields-js',
    alt: 'X logo',
    canvasImage: '/img/flow.png',
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
