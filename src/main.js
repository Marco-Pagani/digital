import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
//import router from "./router";
import "./assets/main.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCircle as fasCircle, faCircleDot as fasCircleDot, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { faCircle as farCircle, faCircleDot as farCircleDot, faClock } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fasCircle, fasCircleDot, faCircleHalfStroke, farCircle, farCircleDot, faClock)

const app = createApp(App)

app.use(createPinia())
//app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
