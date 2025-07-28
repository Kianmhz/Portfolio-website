<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
      <BaseFooter />
    </NuxtLayout>
  </div>
</template>

<style>
/* Global CSS Reset */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* CSS Custom Properties - Global Design Tokens */
:root {
  /* Color System */
  --main-bg-color: #000000;
  --main-text-color: #EEEEEE;
  --secondary-text-color: #A1A1A1;

  /* Brand Colors */
  --main-color: #332FD0;
  --secondary-color: #9254C8;
  --tertiary-color: #E15FED;
  --quaternary-color: #6EDCD9;

  /* Gradient Definitions */
  --gradient-color: linear-gradient(45deg,
      var(--main-color) 0%,
      var(--secondary-color) 10%,
      var(--tertiary-color) 20%,
      var(--quaternary-color) 30%,
      var(--main-color) 40%,
      var(--secondary-color) 50%,
      var(--tertiary-color) 60%,
      var(--quaternary-color) 70%,
      var(--main-color) 80%,
      var(--secondary-color) 90%,
      var(--tertiary-color) 100%);

  /* Animation Properties */
  --gradient-animation: gradient 20s linear infinite alternate;
  --gradient-background-size: 1000% 100%;

  /* Layout Properties */
  --navbar-height: 4rem;
}

/* Global Element Styles */
body {
  font-family: 'Oxygen', sans-serif;
  background: var(--main-bg-color);
  color: var(--main-text-color);
  overflow-x: hidden;
  line-height: 1.6;
}

/* Browser-specific Customizations */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #44444489;
  border-radius: 10px;
  transition: background-color 0.2s ease;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

::-webkit-scrollbar-track {
  background: transparent;
}
</style>