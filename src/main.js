import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCircle as fasCircle,
  faCircleDot as fasCircleDot,
  faCircleHalfStroke
} from '@fortawesome/free-solid-svg-icons'
import {
  faCircle as farCircle,
  faCircleDot as farCircleDot,
  faClock
} from '@fortawesome/free-regular-svg-icons'

library.add(
  fasCircle,
  fasCircleDot,
  faCircleHalfStroke,
  farCircle,
  farCircleDot,
  faClock
)

const app = createApp(App)

app.use(createPinia())

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
