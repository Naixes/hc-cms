import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import { Button, Menu, Icon, Layout } from "ant-design-vue"

Vue.use(Button)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Layout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
