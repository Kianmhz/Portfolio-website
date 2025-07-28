<template>
  <button>
    <template v-if="link">
      <NuxtLink class="contact-button" :to="link" target="_blank">
        <div class="button-icon">
          <Icon :icon="icon" class="text-2xl" />
        </div>
        <div class="button-text">{{ title }}</div>
      </NuxtLink>
    </template>
    <template v-else>
      <div class="contact-button">
        <div class="button-icon">
          <Icon :icon="icon" class="text-2xl" />
        </div>
        <div class="button-text">{{ title }}</div>
      </div>
    </template>
  </button>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  link: {
    type: String,
    required: false,
    default: '',
  },
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.contact-button {
  @apply flex items-center max-sm:w-full;
}

.button-icon {
  @apply relative p-2.5;
}

.button-text {
  transform: translateX(-30px);
  transition: 0.3s ease-in-out;
  @apply relative p-2.5 text-transparent max-sm:hidden;
}

.contact-button:hover .button-text {
  transform: translateX(-10px);
  @apply opacity-100 text-white;
}

.contact-button:hover .button-text::before {
  @apply w-full;
}

.button-icon::before,
.button-text::before {
  content: "";
  transition: 0.3s ease-in-out;
  width: 0px;
  @apply absolute h-[2px] bg-[--main-color] bottom-0 left-0;
}

.button-icon::before {
  @apply w-full;
}
</style>