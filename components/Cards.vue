<script setup>
const cards = ref([
  { id: 3, title: 'Software Engineering', content: 'I approach software engineering through experimentation and system design, combining strong fundamentals with hands-on projects to build efficient and scalable solutions.' },
  { id: 2, title: 'Wouessi - Software Developer Intern', content: 'Built backend services and APIs using Node.js and MongoDB, enabling reliable communication between frontend applications and scalable backend systems.' },
  { id: 1, title: 'Ottawa Derm Centre - Mobile App Developer', content: 'Developed cross-platform mobile applications with Flutter, integrating real-time rendering, camera pipelines, and responsive UI systems for production environments.' }
])
</script>

<template>
  <UContainer>
    <div class="flex flex-col justify-center items-center overflow-hidden pb-10 max-sm:hidden lg:overflow-visible">
      <div class="flex relative w-full sm:w-3/4 sm:h-80 lg:h-96">
        <div v-for="card in cards" :key="card.id" class="resume-card" :id="'card' + card.id">
          <p class="text-2xl leading-normal">{{ card.content }}</p>
          <span class="title">{{ card.title }}</span>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
/* Card-specific styles for positioning and hover effect */
.title {
  @apply absolute bottom-14 text-[--secondary-text-color] text-2xl transition-colors duration-300 ease-in-out;
}

/* Use more specific selectors for hover effects */
.resume-card#card1 .title:hover {
  color: var(--main-color);
}

.resume-card#card2 .title:hover {
  color: var(--secondary-color);
}

.resume-card#card3 .title:hover {
  color: var(--quaternary-color);
}

.resume-card#card1 {
  @apply z-[3] sm:translate-x-[15%];
  border-left: 2px solid var(--main-color);
  background: linear-gradient(to right, color-mix(in srgb, var(--main-color) 8%, transparent), rgba(0, 0, 0, 0.2));
}

.resume-card#card2 {
  @apply z-[2] brightness-[0.5];
  border-left: 2px solid var(--secondary-color);
  background: linear-gradient(to right, color-mix(in srgb, var(--secondary-color) 8%, transparent), rgba(0, 0, 0, 0.2));
}

.resume-card#card3 {
  @apply z-[1] sm:translate-x-[-15%] brightness-[0.5];
  border-left: 2px solid var(--quaternary-color);
  background: linear-gradient(to right, color-mix(in srgb, var(--quaternary-color) 8%, transparent), rgba(0, 0, 0, 0.2));
}

/* Hover effects */
.resume-card#card2:hover,
.resume-card#card3:hover {
  @apply filter brightness-[1];
  transform: translateY(-5px);
}

.resume-card#card3:hover {
  transform: translateX(-15%) translateY(-5px);
}

.resume-card#card3:hover~.resume-card#card1,
.resume-card#card2:hover~.resume-card#card1 {
  @apply transform sm:translate-x-[100%] filter brightness-[0.5];
}

.resume-card#card3:hover~.resume-card#card2 {
  @apply transform sm:translate-x-[85%] filter brightness-[0.5];
}

.resume-card {
  @apply absolute w-[100%] h-[100%] p-6 sm:p-10;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-radius: 20px;
  transition: 0.3s ease-in-out;
}
</style>