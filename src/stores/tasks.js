import { defineStore } from 'pinia'
import { format, add } from 'date-fns'

const getDate = () => format(new Date(), 'MM/dd/yy')

const initTodos = () =>
  [...Array(10)].fill(0).map(() => ({ status: 0, text: '' }))

const initCard = (header) => ({
  header,
  items: initTodos()
})

export const useTodos = defineStore('todos', {
  state: () => ({
    today: initCard(getDate()),
    later: initCard(''),
    eventually: initCard(''),
    yesterday: null,
    cardArchive: []
  }),
  actions: {
    updateDays() {
      const currentDate = getDate()
      const previousDate = format(add(new Date(), { days: -1 }), 'MM/dd/yy')
      if (!this.today.header === currentDate) {
        if (this.today.header === previousDate) this.yesterday = this.today
        this.cardArchive.push(this.today)
        this.today = initCard(currentDate)
      }
    }
  },
  persist: {
    enabled: true,
    strategies: [{ storage: localStorage }]
  }
})
