<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div id="header" class="flex flex-col justify-center pt-8 sm:pt-0">
        <span class="text-center font-extrabold text-xl"
          >Template project with</span
        >
        <div class="flex flex-col lg:flex-row items-center gap-0 lg:gap-2">
          <a
            class="flex justify-center sm:pt-0"
            href="https://nuxtjs.org"
            target="_blank"
          >
            <LogoNuxt />
          </a>
          <span class="text-6xl">+</span>
          <a
            class="flex justify-center sm:pt-0"
            href="https://typeorm.io/"
            target="_blank"
          >
            <LogoTypeorm />
          </a>
        </div>
        <span class="text-center font-extrabold text-xl"
          >and many more ...</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
