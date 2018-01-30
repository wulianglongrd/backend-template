// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import '@/assets/css/default.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/components/global/Operation'
import '@/components/global'
import App from './App'
import router from './router'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
