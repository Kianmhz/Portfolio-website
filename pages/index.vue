<script setup>
// Use Nuxt's built-in SEO composable
useSeoMeta({
  title: 'Kianmhz – Portfolio of Kian Haddad',
  description: 'Explore the portfolio of Kian Haddad (Kianmhz) — a software developer passionate about automation, clean UI, and innovative web solutions.'
})

// Template refs for scrolling
const homeRef = ref(null)
const whatIDoRef = ref(null)
const projectsRef = ref(null)
const contactRef = ref(null)

// Template refs for animations
const leftIntroTitleRef = ref(null)
const rightIntroTitleRef = ref(null)
const leftIntroSectionTwoTitleRef = ref(null)
const rightIntroSectionTwoTitleRef = ref(null)
const firstTextSectionThreeRef = ref(null)
const secondTextSectionThreeRef = ref(null)
const thirdTextSectionThreeRef = ref(null)

// Create scroll object for navbar
const scroll = {
  home: homeRef,
  whatIDo: whatIDoRef,
  projects: projectsRef,
  contact: contactRef,
}

// Create elements object for animations
const elements = {
  leftIntroTitle: leftIntroTitleRef,
  rightIntroTitle: rightIntroTitleRef,
  leftIntroSectionTwoTitle: leftIntroSectionTwoTitleRef,
  rightIntroSectionTwoTitle: rightIntroSectionTwoTitleRef,
  firstTextSectionThree: firstTextSectionThreeRef,
  secondTextSectionThree: secondTextSectionThreeRef,
  thirdTextSectionThree: thirdTextSectionThreeRef
}

// Reactive state
const rafId = ref(null)
const windowDimensions = reactive({
  width: 0,
  height: 0
})

// Animation states
const animationRates = reactive({
  sectionOne: 0,
  sectionTwo: 0,
  sectionThree: 0
})

const calculateRate = (element, startOffset = 0, endOffset = 0, invert = false) => {
  if (!element?.value) return 0

  const rect = element.value.getBoundingClientRect()
  const elementStart = rect.top + window.scrollY - window.innerHeight + startOffset
  const elementEnd = rect.top + window.scrollY + element.value.offsetHeight + endOffset
  const scrollRange = elementEnd - elementStart

  let rate = (window.scrollY - elementStart) / scrollRange

  if (invert) {
    rate = 1 - rate
  }

  return Math.min(Math.max(rate, 0), 1)
}

const updateAnimations = () => {
  if (rafId.value) {
    cancelAnimationFrame(rafId.value)
  }

  rafId.value = requestAnimationFrame(() => {
    // Calculate rates
    animationRates.sectionOne = calculateRate(elements.leftIntroTitle)
    animationRates.sectionTwo = calculateRate(elements.leftIntroSectionTwoTitle)
    animationRates.sectionThree = calculateRate(elements.firstTextSectionThree, 0, -200)

    // Debug logging
    console.log('Animation rates:', animationRates)
    console.log('Elements:', elements)
  })
}

// Computed styles for reactive animations
const titleOneTransform = computed(() => `translateX(-${animationRates.sectionOne * 25}%)`)
const titleTwoTransform = computed(() => `translateX(${animationRates.sectionOne * 25}%)`)
const sectionTwoLeftTransform = computed(() => `translateX(-${animationRates.sectionTwo * 25}%)`)
const sectionTwoRightTransform = computed(() => `translateX(${animationRates.sectionTwo * 25}%)`)

const textOpacities = computed(() => ({
  first: animationRates.sectionThree >= 0.2 ? 1 : 0,
  second: animationRates.sectionThree >= 0.4 ? 1 : 0,
  third: animationRates.sectionThree >= 0.6 ? 1 : 0
}))

// Smooth scroll function
const scrollTo = (refName) => {
  const sectionRef = scroll[refName]
  if (sectionRef?.value) {
    sectionRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}

// Handle resize with debouncing
const { throttle } = useUtils()
const handleResize = throttle(() => {
  const newWidth = window.innerWidth
  const newHeight = window.innerHeight

  if (newWidth !== windowDimensions.width) {
    windowDimensions.width = newWidth
    windowDimensions.height = newHeight
    updateAnimations()
  }
}, 100)

// Lifecycle hooks
onMounted(() => {
  if (typeof window !== 'undefined') {
    windowDimensions.width = window.innerWidth
    windowDimensions.height = window.innerHeight

    window.addEventListener('scroll', updateAnimations, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    // Initial calculation
    updateAnimations()
  }
})

onBeforeUnmount(() => {
  if (rafId.value) {
    cancelAnimationFrame(rafId.value)
  }

  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', updateAnimations)
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<template>
    <BaseNavbar :scroll="scroll" :scrollTo="scrollTo" />

    <UContainer>
        <div class="intro-height flex flex-col text-center justify-center items-center sm:flex-row sm:text-left"
            ref="homeRef">
            <div class="w-full sm:w-1/2">
                <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true"
                    class="text-3xl lg:text-4xl font-bold">Hello, I'm
                </h2>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150" data-aos-easing="ease-in-out"
                    data-aos-once="true">
                    <h1 class="text-6xl md:text-7xl lg:text-8xl py-5 font-bold ">Kianmehr<span
                            class="intro-dot">.</span></h1>
                    <p class="text-md sm:text-lg text-[--secondary-text-color]">
                        A dedicated Software Developer driven by creativity, innovation and a continuous quest for
                        proficiency. Every
                        project I pursue is a journey of exploration, dedication, and a drive for excellence.
                    </p>
                </div>
                <BaseButton data-aos="fade" data-aos-duration="1000" data-aos-delay="2000" data-aos-easing="ease-in-out"
                    data-aos-once="true" @click="scrollTo('whatIDo')" id="intro-button" icon="line-md:coffee-loop"
                    title="Explore" class="mt-4" />
            </div>
            <div class="w-full sm:w-1/2">
                <NuxtImg provider="cloudflare" src="/img/me.webp" alt="Kianmehr's Image"
                    class="ml-auto max-sm:mx-auto w-3/4" data-aos="fade" data-aos-duration="1000"
                    data-aos-easing="ease-in-out" data-aos-once="true" preload />
            </div>
        </div>
    </UContainer>

    <div class="relative">
        <Slider />
        <UContainer>
            <div class="flex justify-center items-center" ref="whatIDoRef">
                <div
                    class="will-change-transform absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <h1 class="title-1" ref="leftIntroTitleRef" :style="{ transform: titleOneTransform }">A Peek Into My
                    </h1>
                    <h1 class="title-2" ref="rightIntroTitleRef" :style="{ transform: titleTwoTransform }">Software
                        Skills</h1>
                </div>
            </div>
        </UContainer>
    </div>

    <UContainer>
        <div class="flex flex-col justify-center items-center gap-32">
            <div class="grid grid-cols-1 text-center gap-y-12 lg:grid-cols-2 lg:gap-x-14 sm:text-left">
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="true"
                    class="flex flex-col justify-center">
                    <h1 class="text-3xl sm:text-4xl mb-4 font-bold">What I Do</h1>
                    <p class="text-md sm:text-lg text-[--secondary-text-color]">
                        Creating digital experiences through a fusion of sleek design and seamless functionality. From
                        the
                        first click to the lasting impression, I blend aesthetics with performance, making every
                        interaction
                        matter.
                    </p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-easing="ease-in-out"
                    data-aos-once="true">
                    <Skillset />
                </div>
            </div>
            <logos />
        </div>
    </UContainer>

    <div class="relative">
        <Slider />
        <UContainer>
            <div class="flex justify-center items-center">
                <div
                    class="will-change-transform absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <h1 class="title-1" ref="leftIntroSectionTwoTitleRef"
                        :style="{ transform: sectionTwoLeftTransform }">Discover My</h1>
                    <h1 class="title-2" ref="rightIntroSectionTwoTitleRef"
                        :style="{ transform: sectionTwoRightTransform }">Recent Projects</h1>
                </div>
            </div>
        </UContainer>
    </div>

    <div ref="projectsRef">
        <Projects />
    </div>

    <Cards />

    <UContainer>
        <div
            class="wrap text-4xl md:text-6xl lg:text-8xl font-bold text-transparent mb-20 text-center sm:my-20 sm:text-left will-change-transform whitespace-nowrap">
            <p ref="firstTextSectionThreeRef" :style="{ opacity: textOpacities.first }">And that's a wrap</p>
            <p ref="secondTextSectionThreeRef" :style="{ opacity: textOpacities.second }">What's next?</p>
            <p ref="thirdTextSectionThreeRef" :style="{ opacity: textOpacities.third }">Stay in touch!</p>
        </div>
    </UContainer>

    <div ref="contactRef">
        <Contact />
    </div>
</template>

<style>
/* Intro section styles */
.intro-height {
    min-height: calc(100svh - 4rem);
    /* Adjust the height to be the full viewport height minus the navbar height */
    padding-top: 4rem;
    /* Adjust the padding to be the navbar height */
}

.intro-dot {
    animation: gradient 20s linear infinite alternate;
    background: var(--gradient-color);
    background-size: 1000% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Title section styles */
.title-1,
.title-2 {
    @apply text-4xl md:text-6xl lg:text-8xl font-bold whitespace-nowrap text-transparent;
    line-height: 1.4;
}

.title-1 {
    animation: gradient 20s linear infinite alternate;
    background: var(--gradient-color);
    background-size: 1000% 100%;
    background-clip: text;
    -webkit-background-clip: text;
}

.title-2 {
    animation: gradient 20s linear infinite alternate;
    background: linear-gradient(-45deg,
            var(--main-color) 0%,
            var(--secondary-color) 10%,
            var(--tertiary-color) 20%,
            var(--quaternary-color) 30%,
            var(--main-color) 40%,
            var(--secondary-color) 50%,
            var(--tertiary-color) 60%,
            var(--quaternary-color) 70%,
            var(--main-color) 80%,
            var(--secondary-color) 90%,
            var(--tertiary-color) 100%);
    background-size: 1000% 100%;
    background-clip: text;
    -webkit-background-clip: text;
}

/* Wrap section styles */
.wrap p {
    animation: gradient 20s linear infinite alternate;
    background: var(--gradient-color);
    background-size: 1000% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    transition: opacity 0.5s ease-in-out;
    line-height: 1.625;
}
</style>