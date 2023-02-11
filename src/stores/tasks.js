import { defineStore } from 'pinia'

const initCard = () => [...Array(10)].fill(0).map(() => ({ status: 0, text: '' }))

export const useTodos = defineStore('todos', {
  state: () => ({
    today: initCard(),
    later: initCard(),
    eventually: initCard(),
    yesterday: null,
    dailyArchive: []
  }),
  persist: {
    enabled: true
  }
})
