import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCircle as fasCircle,
  faCircleDot as fasCircleDot,
  faCircleHalfStroke,
  faPlay,
  faSquare,
  faDiamond
} from '@fortawesome/free-solid-svg-icons'
import {
  faCircle as farCircle,
  faCircleDot as farCircleDot,
  faClock,
  faCalendarMinus
} from '@fortawesome/free-regular-svg-icons'

library.add(
  fasCircle,
  fasCircleDot,
  faCircleHalfStroke,
  farCircle,
  farCircleDot,
  faClock,
  faPlay,
  faSquare,
  faDiamond,
  faCalendarMinus
)

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPersist)
app.use(pinia)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
