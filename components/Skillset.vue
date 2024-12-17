<script setup>
import { Icon } from '@iconify/vue';

const skills = ref([
  { id: 1, icon: 'fa6-solid:code', title: "Frontend Development", content: "Transforming designs into interactive experiences, optimized for speed and scalability." },
  { id: 2, icon: 'fa6-solid:server', title: "Backend Development", content: "Building and maintaining robust server-side logic, ensuring data integrity and seamless integration." },
  { id: 3, icon: 'fa6-solid:chart-line', title: "Data Analytics Solutions", content: "Transforming data into meaningful insights for smarter and informed decision-making."},
  { id: 4, icon: 'iconamoon:synchronize-bold', title: "Automation", content: "Designing scripts and bots to automate repetitive tasks, streamlining processes for efficiency." }
]);

const threshold = 150; // Adjust this value to change the distance threshold for revealing the border

const handleMouseMove = (event) => {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const distanceX = Math.max(0, Math.abs(x - rect.width / 2) - rect.width / 2);
    const distanceY = Math.max(0, Math.abs(y - rect.height / 2) - rect.height / 2);
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    const opacity = Math.max(0, Math.min(1, (threshold - distance) / threshold));

    if (distance <= threshold) {
      item.style.setProperty('--mouse-x', `${x}px`);
      item.style.setProperty('--mouse-y', `${y}px`);
      item.style.setProperty('--border-opacity', opacity);
    } else {
      item.style.setProperty('--border-opacity', '0');
    }
  });
};

const handleMouseLeave = () => {
  const gridItems = document.querySelectorAll('.grid-item');

  gridItems.forEach(item => {
    item.style.setProperty('--mouse-x', '50%');
    item.style.setProperty('--mouse-y', '50%');
    item.style.setProperty('--border-opacity', '0');
  });
};

onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseleave', handleMouseLeave);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseleave', handleMouseLeave);
});
</script>

<template>
  <div class="relative">
    <div class="grid grid-cols-1 text-center gap-4 sm:grid-cols-2 sm:text-left">
      <div v-for="skill in skills" :key="skill.id"
        class="grid-item flex flex-col p-6 border-4 border-transparent rounded-lg items-center sm:items-start relative overflow-hidden">
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