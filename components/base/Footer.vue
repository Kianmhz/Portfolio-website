<template>
  <div class="footer-content flex items-center justify-center py-5 w-full text-white relative">
    <div class="line flex-grow h-px bg-gradient-to-r from-transparent via-[--secondary-text-color] to-transparent">
    </div>
    <span class="author-text mx-4">Designed by <span class="author-name">Kianmhz</span></span>
    <div class="line flex-grow h-px bg-gradient-to-r from-transparent via-[--secondary-text-color] to-transparent">
    </div>
  </div>
</template>

<style>
.author-name {
  animation: var(--gradient-animation);
  background: var(--gradient-color);
  background-size: var(--gradient-background-size);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
}
</style>