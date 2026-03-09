<script setup>
const props = defineProps({
  texts: {
    type: Array,
    default: () => ["And that's a wrap", "What's next?", "Stay in touch!"],
  },
  staggerDelay: {
    type: Number,
    default: 150,
  },
})

const containerRef = ref()
const lineRefs = ref([])
const revealed = ref(props.texts.map(() => false))

onMounted(() => {
  if (!import.meta.client) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const index = Number(entry.target.dataset.index)
        // Stagger each line after the previous one
        setTimeout(() => {
          revealed.value[index] = true
        }, index * props.staggerDelay)
        observer.unobserve(entry.target)
      })
    },
    { threshold: 0.2 }
  )

  lineRefs.value.forEach((el) => {
    if (el) observer.observe(el)
  })

  onBeforeUnmount(() => observer.disconnect())
})

defineExpose({ containerRef })
</script>

<template>
  <div
    ref="containerRef"
    class="text-4xl md:text-6xl lg:text-8xl font-bold text-center sm:text-left"
  >
    <p
      v-for="(text, index) in texts"
      :key="index"
      :ref="(el) => (lineRefs[index] = el)"
      :data-index="index"
      class="reveal-line"
      :class="{ 'is-revealed': revealed[index] }"
    >{{ text }}</p>
  </div>
</template>

<style scoped>
.reveal-line {
  display: block;
  opacity: 0;
  transform: translateY(2rem);
  background: var(--gradient-color);
  background-size: var(--gradient-background-size);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: var(--gradient-animation);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  line-height: 1.3;
  margin-bottom: 0.5rem;
}

.reveal-line.is-revealed {
  opacity: 1;
  transform: translateY(0);
}
</style>
