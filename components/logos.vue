<script setup>
import { Autoplay, FreeMode } from 'swiper/modules'
import { Icon } from '@iconify/vue'

const icons = ref([
  'vscode-icons:file-type-nuxt',
  'vscode-icons:file-type-vue',
  'vscode-icons:file-type-django',
  'vscode-icons:file-type-tailwind',
  'vscode-icons:file-type-cpp3',
  'vscode-icons:file-type-js-official',
  'vscode-icons:file-type-python',
])

// Triple the icons array
const tripledIcons = computed(() => icons.value.concat(icons.value, icons.value))
</script>
<template>
  <div class=" w-full relative max-sm:hidden">
    <Swiper
      :modules="[Autoplay, FreeMode]"
      :slidesPerView="4"
      :loop="true"
      :autoplay="{ delay: 0, disableOnInteraction: false }"
      :speed="6000"
      :freeMode="true"
      :freeModeMomentum="false"
    >
      <SwiperSlide class="flex justify-center items-center" v-for="icon in tripledIcons" :key="icon">
        <Icon :icon="icon" class="text-8xl"/>
      </SwiperSlide>
    </Swiper>
    <div class="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-black to-transparent z-10"></div>
    <div class="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
  </div>
</template>
