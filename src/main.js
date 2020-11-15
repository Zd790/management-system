import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import axios from 'axios'
import "./permission"
import "@/common/common.css"
import "./mock/mock.js";
import echarts from "echarts"
import moment from 'moment'

Vue.use(ElementUI);
Vue.prototype.$axios=axios
Vue.prototype.$moment=moment
Vue.prototype.$echarts=echarts//Vue.use用于vue专属的
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
