<template>
  <div class="bgg w-full lg:h-[500px] md:h-[400px] min-h-[300px] z-0 opacity-35">
    <div class="overlay-bottom absolute bottom-[-1px] left-0 w-full h-5/6 bg-gradient-to-t from-black to-transparent">
    </div>
    <div class="overlay-top absolute top-[-1px] left-0 w-full h-5/6 bg-gradient-to-b from-black to-transparent"></div>
  </div>
</template>

<style>
.bgg {
  animation: gradient 60s linear infinite alternate;
  background: linear-gradient(-45deg,
      var(--main-color) 0%,
      var(--secondary-color) 15%,
      var(--tertiary-color) 30%,
      var(--main-color) 45%,
      var(--secondary-color) 60%,
      var(--tertiary-color) 75%,
      var(--main-color) 90%,
      var(--secondary-color) 100%);
  background-size: 1000% 100%;
}
</style>