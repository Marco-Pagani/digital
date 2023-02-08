<template>
  <main class="p-8 gap-6 bg-olive h-full">
    <section class="flex">
      <card-base title="Now" subtitle="2/7/23" color="0" class="z-30" />
      <div class="bg-medium-brown rounded-lg font-printed w-[450px] -ml-[400px] -mb-3 mt-3 p-2 relative z-20">
        <p class="text-xl absolute right-2 top-4 origin-top-left rotate-90 translate-x-full ">Later</p>
      </div>
      <div class="bg-dark-brown rounded-lg font-printed w-[450px] -ml-[400px] -mb-6 mt-6 p-2 relative">
        <p class="text-xl absolute right-2 top-4 origin-top-left rotate-90 translate-x-full ">Eventually</p>
      </div>
    </section>
    <!-- <card-base title="Later" subtitle="February" color="1" />
    <card-base title="Eventually" subtitle="My Dreams" color="2" /> -->
  </main>
</template>

<script setup>
import CardBase from '../components/card/card-base.vue'
</script>

<style>
input:focus {
  outline: none;
}
</style>