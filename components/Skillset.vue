<script setup>
import { Icon } from '@iconify/vue'

const skills = ref([
  {
    id: 1,
    icon: 'mdi:web',
    title: 'Full-Stack Development',
    content: 'Designing and developing seamless web applications from frontend to backend, ensuring responsiveness and clean architecture.'
  },
  {
    id: 2,
    icon: 'mdi:cellphone',
    title: 'Mobile Development',
    content: 'Crafting responsive mobile apps with Flutter, designed for smooth performance and consistent experiences across iOS and Android.'
  },
  {
    id: 3,
    icon: 'mdi:lightning-bolt',
    title: 'AI-Powered Integrations',
    content: 'Enhancing applications with real-time insights using AI models for smarter predictions and decisions.'
  },
  {
    id: 4,
    icon: 'iconamoon:synchronize-bold',
    title: 'Automation',
    content: 'Designing scripts and bots to automate repetitive tasks, streamlining processes for efficiency.'
  }
])

// Reactive state for mouse interactions
const hoveredSkill = ref(null)
const skillRefs = ref([])

// Configuration
const THRESHOLD = 150

const calculateMouseEffect = (event, skillElement) => {
  if (!skillElement) return null

  const rect = skillElement.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  const distanceX = Math.max(0, Math.abs(x - rect.width / 2) - rect.width / 2)
  const distanceY = Math.max(0, Math.abs(y - rect.height / 2) - rect.height / 2)
  const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

  const opacity = Math.max(0, Math.min(1, (THRESHOLD - distance) / THRESHOLD))

  return distance <= THRESHOLD ? {
    x: `${x}px`,
    y: `${y}px`,
    opacity: opacity
  } : null
}

const handleMouseMove = (event) => {
  skillRefs.value.forEach((skillRef, index) => {
    if (!skillRef) return

    const effect = calculateMouseEffect(event, skillRef)

    if (effect) {
      skillRef.style.setProperty('--mouse-x', effect.x)
      skillRef.style.setProperty('--mouse-y', effect.y)
      skillRef.style.setProperty('--border-opacity', effect.opacity)
      hoveredSkill.value = skills.value[index].id
    } else {
      skillRef.style.setProperty('--border-opacity', '0')
    }
  })
}

const handleMouseLeave = () => {
  skillRefs.value.forEach(skillRef => {
    if (skillRef) {
      skillRef.style.setProperty('--mouse-x', '50%')
      skillRef.style.setProperty('--mouse-y', '50%')
      skillRef.style.setProperty('--border-opacity', '0')
    }
  })
  hoveredSkill.value = null
}

// Setup event listeners
onMounted(() => {
  if (typeof window !== 'undefined') {
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true })
  }
})

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseleave', handleMouseLeave)
  }
})
</script>

<template>
  <div class="relative">
    <div class="grid grid-cols-1 text-center gap-4 sm:grid-cols-2 sm:text-left">
      <div v-for="(skill, index) in skills" :key="skill.id" :ref="(el) => { if (el) skillRefs[index] = el }"
        class="grid-item flex flex-col p-6 border-4 border-transparent rounded-lg items-center sm:items-start relative overflow-hidden"
        :class="{ 'hovered': hoveredSkill === skill.id }">
        <Icon :icon="skill.icon" class="text-4xl" />
        <h2 class="text-lg sm:text-xl font-bold my-2.5">{{ skill.title }}</h2>
        <p class="text-md sm:text-lg text-[--secondary-text-color]">{{ skill.content }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-item {
  --mouse-x: 50%;
  --mouse-y: 50%;
  --border-opacity: 0;
  position: relative;
  border: 3px solid transparent;
  transition: border-color 0.3s ease, opacity 0.3s ease;
}

.grid-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: inherit;
  border-radius: inherit;
  pointer-events: none;
  mask-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 60%);
  -webkit-mask-image: radial-gradient(circle at var(--mouse-x) var(--mouse-y), black 0%, transparent 60%);
  border-color: var(--main-color);
  opacity: var(--border-opacity);
  transition: mask-image 0.3s ease, opacity 0.3s ease;
}
</style>