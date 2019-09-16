import Vue from 'vue'
import BoostrapVue from 'bootstrap-vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import router from './router'

Vue.config.productionTip = false

// Some aditions
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueCodeHightlight from 'vue-code-highlight'

Vue.use(VueCodeHightlight)
Vue.use(BoostrapVue)

new Vue({
  apolloProvider: createProvider({
    httpLinkOptions: {
      uri: 'https://api.github.com/graphql',
      headers: {
        authorization: 'bearer ' + process.env.AUTH_TOKEN,
      }
    },
    cache: new InMemoryCache(),
    connectToDevTools: true
  }),
  router,
  render: h => h(App)
}).$mount('#app')
