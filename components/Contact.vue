<script setup>
const contacts = ref([
  { title: 'Linkedin', link: 'https://www.linkedin.com/in/kianmhz/', description: 'Connect with me professionally and let\'s build bridges.', icon: 'jam:linkedin-square' },
  { title: 'Email', link: 'mailto:haddad.kianm@gmail.com', description: 'Reach out directly for inquiries, collaborations, or just to say hi.', icon: 'material-symbols:mail-outline' },
  { title: 'GitHub', link: 'https://github.com/Kianmhz', description: 'Explore my projects, repositories, and contributions.', icon: 'codicon:github' }
])
</script>

<template>
  <UContainer>
    <div class="mb-10 grid grid-cols-1 text-center gap-6 sm:gap-12 sm:grid-cols-3 sm:text-left">
      <div v-for="contact in contacts" :key="contact.title" class="flex flex-col items-center sm:items-start">
        <h1 class="text-[--main-color] text-lg font-bold">{{ contact.title }}</h1>
        <p class="text-xl sm:text-2xl my-2">{{ contact.description }}</p>
        <BaseButton
          :icon="contact.icon"
          :title="contact.title"
          :link="contact.link"
          class="mx-auto sm:mx-0"
        />
      </div>
    </div>
  </UContainer>
</template>
