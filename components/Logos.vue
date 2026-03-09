<script setup>
import { Icon } from '@iconify/vue'

const icons = [
  { name: 'simple-icons:nuxtdotjs',   label: 'Nuxt',        brand: '#00DC82' },
  { name: 'simple-icons:vuedotjs',    label: 'Vue',         brand: '#4FC08D' },
  { name: 'simple-icons:django',      label: 'Django',      brand: '#1F6F54' },
  { name: 'simple-icons:tailwindcss', label: 'Tailwind CSS',brand: '#06B6D4' },
  { name: 'simple-icons:cplusplus',   label: 'C++',         brand: '#00599C' },
  { name: 'simple-icons:javascript',  label: 'JavaScript',  brand: '#F7DF1E' },
  { name: 'simple-icons:python',      label: 'Python',      brand: '#3776AB' },
  { name: 'simple-icons:flutter',     label: 'Flutter',     brand: '#54C5F8' },
  { name: 'simple-icons:nodedotjs',   label: 'Node.js',     brand: '#5FA04E' },
  { name: 'simple-icons:mongodb',     label: 'MongoDB',     brand: '#47A248' },
  { name: 'simple-icons:pytorch',     label: 'PyTorch',     brand: '#EE4C2C' },
]
</script>

<template>
  <div class="w-full relative overflow-hidden max-sm:hidden">
    <div class="marquee-track">
      <div class="marquee-content" aria-hidden="true">
        <Icon v-for="icon in icons" :key="icon.name" :icon="icon.name" :aria-label="icon.label" class="marquee-icon shrink-0" :style="{ '--brand': icon.brand }" />
      </div>
      <div class="marquee-content" aria-hidden="true">
        <Icon v-for="icon in icons" :key="'dup-' + icon.name" :icon="icon.name" :aria-label="icon.label" class="marquee-icon shrink-0" :style="{ '--brand': icon.brand }" />
      </div>
    </div>
    <div class="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
    <div class="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
  </div>
</template>

<style scoped>
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 22s linear infinite;
}

.marquee-content {
  display: flex;
  align-items: center;
  gap: 7rem;
  padding: 0.5rem 3.5rem;
}

.marquee-icon {
  font-size: 5rem;
  color: #A1A1A1;
  transition: opacity 0.3s ease, color 0.3s ease, filter 0.3s ease;
}

.marquee-icon:hover {
  opacity: 1;
  color: var(--brand);
  filter: drop-shadow(0 0 10px var(--brand));
}

@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
