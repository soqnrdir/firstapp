import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  //처음 페이지를 지정함
  render: h => h(App)
}).$mount('#app')
