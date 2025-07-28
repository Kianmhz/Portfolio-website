<script setup>
// SEO Meta - moved to top as per Nuxt convention
useSeoMeta({
  title: 'Kianmhz – Portfolio of Kian Haddad',
  description: 'Explore the portfolio of Kian Haddad (Kianmhz) — a software developer passionate about automation, clean UI, and innovative web solutions.'
})

// Template refs - organized by sections
const homeRef = ref()
const whatIDoRef = ref()
const projectsRef = ref()
const contactRef = ref()

// Animation element refs - organized by sections
const leftIntroTitleRef = ref()
const rightIntroTitleRef = ref()
const leftIntroSectionTwoTitleRef = ref()
const rightIntroSectionTwoTitleRef = ref()
const firstTextSectionThreeRef = ref()
const secondTextSectionThreeRef = ref()
const thirdTextSectionThreeRef = ref()

// VueUse composables for reactive window and scroll tracking
const { y: scrollY } = useWindowScroll()

// Reactive refs grouped by functionality
const scrollRefs = computed(() => ({
  home: homeRef,
  whatIDo: whatIDoRef,
  projects: projectsRef,
  contact: contactRef,
}))

const animationRefs = computed(() => ({
  leftIntroTitle: leftIntroTitleRef,
  rightIntroTitle: rightIntroTitleRef,
  leftIntroSectionTwoTitle: leftIntroSectionTwoTitleRef,
  rightIntroSectionTwoTitle: rightIntroSectionTwoTitleRef,
  firstTextSectionThree: firstTextSectionThreeRef,
  secondTextSectionThree: secondTextSectionThreeRef,
  thirdTextSectionThree: thirdTextSectionThreeRef
}))

// Pure animation calculation function using VueUse
const calculateAnimationRate = (element, startOffset = 0, endOffset = 0, invert = false) => {
  if (!element?.value || !import.meta.client) return 0

  const rect = element.value.getBoundingClientRect()
  const elementStart = rect.top + scrollY.value - window.innerHeight + startOffset
  const elementEnd = rect.top + scrollY.value + element.value.offsetHeight + endOffset
  const scrollRange = elementEnd - elementStart

  const rate = (scrollY.value - elementStart) / scrollRange

  return invert ? 1 - rate : Math.min(Math.max(rate, 0), 1)
}

// Reactive computed animation rates using VueUse scroll position
const sectionOneRate = computed(() =>
  calculateAnimationRate(animationRefs.value.leftIntroTitle)
)

const sectionTwoRate = computed(() =>
  calculateAnimationRate(animationRefs.value.leftIntroSectionTwoTitle)
)

const sectionThreeRate = computed(() =>
  calculateAnimationRate(animationRefs.value.firstTextSectionThree, 0, -200)
)

// Computed transform styles for smooth animations
const transformStyles = computed(() => ({
  titleOne: `translateX(-${sectionOneRate.value * 25}%)`,
  titleTwo: `translateX(${sectionOneRate.value * 25}%)`,
  sectionTwoLeft: `translateX(-${sectionTwoRate.value * 25}%)`,
  sectionTwoRight: `translateX(${sectionTwoRate.value * 25}%)`
}))

// Computed opacity styles for text animations
const textOpacities = computed(() => ({
  first: sectionThreeRate.value >= 0.2 ? 1 : 0,
  second: sectionThreeRate.value >= 0.4 ? 1 : 0,
  third: sectionThreeRate.value >= 0.6 ? 1 : 0
}))

// Smooth scroll function with better error handling
const scrollToSection = (sectionName) => {
  const targetRef = scrollRefs.value[sectionName]

  if (targetRef?.value && import.meta.client) {
    targetRef.value.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
</script>

<template>
    <BaseNavbar :scroll="scrollRefs" :scrollTo="scrollToSection" />

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
                    data-aos-once="true" @click="scrollToSection('whatIDo')" id="intro-button"
                    icon="line-md:coffee-loop" title="Explore" class="mt-4" />
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
                    <h1 class="title-1" ref="leftIntroTitleRef" :style="{ transform: transformStyles.titleOne }">A Peek
                        Into My
                    </h1>
                    <h1 class="title-2" ref="rightIntroTitleRef" :style="{ transform: transformStyles.titleTwo }">
                        Software
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
            <Logos />
        </div>
    </UContainer>

    <div class="relative">
        <Slider />
        <UContainer>
            <div class="flex justify-center items-center">
                <div
                    class="will-change-transform absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                    <h1 class="title-1" ref="leftIntroSectionTwoTitleRef"
                        :style="{ transform: transformStyles.sectionTwoLeft }">Discover My</h1>
                    <h1 class="title-2" ref="rightIntroSectionTwoTitleRef"
                        :style="{ transform: transformStyles.sectionTwoRight }">Recent Projects</h1>
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
/* Page-specific styles */
.intro-height {
    min-height: calc(100svh - var(--navbar-height));
    padding-top: var(--navbar-height);
}

/* Shared gradient text properties */
.intro-dot,
.title-1,
.title-2,
.wrap p {
    animation: var(--gradient-animation);
    background: var(--gradient-color);
    background-size: var(--gradient-background-size);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Specific override for .title-2 gradient */
.title-2 {
    animation: var(--gradient-animation);
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
    background-size: var(--gradient-background-size);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Title styles */
.title-1,
.title-2 {
    font-size: 2.25rem;
    font-weight: 700;
    white-space: nowrap;
    line-height: 1.4;
}

@media (min-width: 768px) {

    .title-1,
    .title-2 {
        font-size: 3.75rem;
    }
}

@media (min-width: 1024px) {

    .title-1,
    .title-2 {
        font-size: 6rem;
    }
}

/* Page-specific animations */
.wrap p {
    transition: opacity 0.5s ease-in-out;
    line-height: 1.625;
}
</style>