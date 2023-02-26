<script setup>
import TasksView from './views/TasksView.vue'
const version = APP_VERSION
</script>

<template>
  <main class="bg-olive grow pb-4 md:pb-0">
    <header class="bg-dark-brown text-center p-4">
      <h1 class="font-printed text-3xl">Emu</h1>
    </header>
    <TasksView></TasksView>
  </main>
  <footer
    class="bg-dark-brown py-6 px-8 flex justify-between gap-6 text-sm flex-wrap"
  >
    <div class="flex items-center gap-2">
      <img src="/footer_logo.webp" class="w-7 -mb-2" alt="Marco Pagani logo" />
      <p>
        Made by
        <a href="https://pagani.io" class="underline">Marco Pagani</a>
      </p>
    </div>
    <p>
      <a href="https://github.com/Marco-Pagani/digital" class="underline"
        >See source on Github</a
      >
      (v{{ version }})
    </p>
  </footer>
</template>
