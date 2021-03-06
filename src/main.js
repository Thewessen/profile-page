import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import router from './router'

Vue.config.productionTip = false

// Some aditions
import { InMemoryCache } from 'apollo-cache-inmemory'

new Vue({
  apolloProvider: createProvider({
    httpLinkOptions: {
      uri: 'https://api.github.com/graphql',
      headers: {
        // eslint-disable-next-line
        authorization: 'bearer ' + process.env.VUE_APP_AUTH_TOKEN,
      }
    },
    cache: new InMemoryCache(),
    connectToDevTools: true
  }),
  router,
  render: h => h(App),
}).$mount('#app')
