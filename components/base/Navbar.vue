<script setup>
const props = defineProps({
  scroll: {
    type: Object,
    required: true
  },
  scrollTo: {
    type: Function,
    required: true
  }
})

// Use navigation composable
const { isScrollingUp, loaded, setupScrollListener, cleanupScrollListener, setLoaded } = useNavigation()

onMounted(() => {
  setupScrollListener()
  setLoaded()
})

onBeforeUnmount(() => {
  cleanupScrollListener()
})
</script>

<template>
  <Transition name="navbar-fade">
    <nav v-show="isScrollingUp" class="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-b from-black to-transparent"
      role="navigation" aria-label="Main navigation">
      <UContainer>
        <div class="flex justify-between items-center h-16" :class="{ 'no-slide': loaded }">
          <button @click="scrollTo('home')" class="nav slide-in" aria-label="Go to Homepage" type="button">
            <div class="flex justify-center items-center w-full">
              <Sign class="sign" />
            </div>
          </button>
          <button @click="scrollTo('whatIDo')" class="nav slide-in delay-1" type="button">
            What I do
          </button>
          <button @click="scrollTo('projects')" class="nav slide-in delay-2" type="button">
            Projects
          </button>
          <button @click="scrollTo('contact')" class="nav slide-in delay-3" type="button">
            Contacts
          </button>
        </div>
      </UContainer>
    </nav>
  </Transition>
</template>

<style scoped>
.nav {
  @apply text-base transition-all duration-200 opacity-0 hover:text-[--main-color] max-sm:hidden max-sm:first:flex;
}

.slide-in {
  animation: slideInFromLeft 0.5s forwards;
}

.no-slide .slide-in {
  animation: none;
  opacity: 1;
}

.delay-1 {
  animation-delay: 0.25s;
}

.delay-2 {
  animation-delay: 0.5s;
}

.delay-3 {
  animation-delay: 0.75s;
}

.navbar-fade-enter-from,
.navbar-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.navbar-fade-enter-to,
.navbar-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.navbar-fade-enter-active,
.navbar-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
</style>
