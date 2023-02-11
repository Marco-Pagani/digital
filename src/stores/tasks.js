import { defineStore } from 'pinia'
import { format } from 'date-fns'

const getDate = () => format(new Date(), 'MM/dd/yy')

const initTodos = () => [...Array(10)].fill(0).map(() => ({ status: 0, text: '' }))

const initCard = (header) => ({
  header,
  todos: initTodos()
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
      if (!this.today.header === currentDate) {
        this.cardArchive.push(this.today)
        this.today = initCard(currentDate)
      }
    }
  },
  persist: {
    enabled: true
  }
})
