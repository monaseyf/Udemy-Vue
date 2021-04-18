import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import BaseButton from './UI/BaseButton'
import BaseCard from './UI/BaseCard'
import VueRouter from 'vue-router'
import router from './router.js'
import vuetify from '@/plugins/vuetify'

Vue.use(VueRouter)
Vue.config.productionTip = false


Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);


new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')




