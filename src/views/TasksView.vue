<template>
  <main class="p-8">
    <div class="rounded bg-light-brown max-w-[420px] p-6">
      <header class="flex justify-between">
        <h2 class="text-xl">Now</h2>
        <p>02-08-2023</p>
      </header>
      <ul class="font-handwritten text-lg">
        <li v-for="index in 10" :key="index" class="flex w-full gap-6 p-3 rounded-lg mt-3 focus-within:bg-medium-brown">
          <span>0</span>
          <input type="text" class="bg-light-brown border-b border-off-black grow focus:bg-medium-brown px-3" />
        </li>
      </ul>
    </div>
  </main>
</template>

<script setup></script>

<style>
input:focus {
  outline: none;
}
</style>