import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false

Vue.use(Chartkick.use(Chart))
Vue.use(VueApexCharts)

Vue.component('apex-chart', VueApexCharts)

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
