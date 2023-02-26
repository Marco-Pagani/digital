<template>
  <section class="pt-12 p-4 flex flex-col md:flex-row justify-center gap-8">
    <div class="flex relative justify-center">
      <card-base :data="currentCard" class="z-30" />
      <div
        class="absolute w-[85vw] max-w-[450px] h-32 -mt-4 rounded-lg z-20"
        :class="secondCardBG"
      />
      <div
        class="absolute w-[80vw] max-w-[420px] h-32 -mt-8 rounded-lg z-10"
        :class="thirdCardBG"
      />
    </div>
    <div
      class="flex justify-between flex-row md:flex-col max-w-[480px] w-full md:w-auto grow self-center md:self-stretch md:grow-0"
    >
      <div class="flex flex-row md:flex-col justify-start gap-6">
        <paper-button
          :type="0"
          :icon="['fas', 'play']"
          @click="currentCard = cards.today"
        />
        <paper-button
          :type="1"
          :icon="['fas', 'square']"
          @click="currentCard = cards.later"
        />
        <paper-button
          :type="2"
          :icon="['fas', 'diamond']"
          @click="currentCard = cards.eventually"
        />
      </div>
      <paper-button :type="2" :icon="['far', 'calendar-minus']" />
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import CardBase from '../components/card/card-base.vue'
import PaperButton from '../components/paper-button.vue'

const cards = {
  today: {
    index: 'today',
    type: 0
  },
  later: {
    index: 'later',
    type: 1
  },
  eventually: {
    index: 'eventually',
    type: 2
  }
}
const currentCard = ref(cards.today)
const secondCardBG = computed(() =>
  ['bg-light-brown', 'bg-medium-brown', 'bg-dark-brown'].at(
    (currentCard.value.type + 1) % 3
  )
)
const thirdCardBG = computed(() =>
  ['bg-light-brown', 'bg-medium-brown', 'bg-dark-brown'].at(
    (currentCard.value.type + 2) % 3
  )
)
</script>
