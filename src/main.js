import Vue from 'vue'
import App from './App'
import MuseUI from 'muse-ui'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'muse-ui/dist/muse-ui.css'
import store from './store'
import router from './router'

Vue.use(MuseUI)
Vue.use(MintUI)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
