import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import BaseButton from './UI/BaseButton'
import BaseCard from './UI/BaseCard'
Vue.config.productionTip = false

// const app = createApp(App);
Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);


new Vue({
  store: store,
  render: h => h(App)
}).$mount('#app')




