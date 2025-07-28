<script setup>
const cards = ref([
  { id: 3, title: 'Python Certification', src: '/img/python.jpg', content: 'Certified in Python, I possess a strong foundation in scripting and backend development, showcasing my dedication to continuous learning in this versatile language.'},
  { id: 2, title: 'C++ Certification', src: '/img/CPP.jpg', content: 'A reflection to my proficiency in C++, this certification validates my skills in object-oriented programming and data structures.' },
  { id: 1, title: 'Professional Resume', src: '/Resume.pdf', content: 'A blend of foundational knowledge and hands-on projects, showcasing my dedication to software engineering.' }
])
</script>

<template>
  <UContainer>
    <div class="flex flex-col justify-center items-center overflow-hidden max-sm:hidden lg:overflow-visible">
      <div class="flex relative w-full sm:w-3/4 sm:h-80 lg:h-96">
        <div v-for="card in cards" :key="card.id" class="resume-card" :id="'card' + card.id">
          <p class="text-2xl leading-normal">{{ card.content }}</p>
          <NuxtLink :to="card.src" external target="_blank" class="title">{{ card.title }}</NuxtLink>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
/* Card-specific styles for positioning and hover effect */
.title {
  @apply absolute animate-pulse bottom-14 text-[--secondary-text-color] text-2xl transition-colors duration-300 ease-in-out;
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
}

.resume-card#card2 {
  @apply z-[2] brightness-[0.5];
  border-left: 2px solid var(--secondary-color);
}

.resume-card#card3 {
  @apply z-[1] sm:translate-x-[-15%] brightness-[0.5];
  border-left: 2px solid var(--quaternary-color);
}

/* Hover effects */
.resume-card#card2:hover,
.resume-card#card3:hover {
  @apply filter brightness-[1];
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
  background: linear-gradient(to right, rgb(24, 24, 24), rgb(0, 0, 0));
  transition: 0.3s ease-in-out;
  box-shadow: -20px 0px 20px rgba(0, 0, 0, 0.7);
}
</style>