import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Buefy from 'buefy'
import './scss/main.scss'

Vue.use(Buefy)

import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "G-3L7BXDE1C2" }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
