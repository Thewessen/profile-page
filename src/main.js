import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import router from './router'
import VueMarkdown from 'vue-markdown'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

Vue.config.productionTip = false

// Global component registration
Vue.component(
  'VueMarkdown',
  // Look for the component options on `.default`, which will
  // exist if the component was exported with `export default`,
  // otherwise fall back to module's root.
  VueMarkdown.default || VueMarkdown
)

// eslint-disable-next-line
const requireComponent = require.context(
  './components/base_components', false, /\w+\.(vue|js)$/
)

// register all components found in @/components/base
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  // get filename of the component PascalCase
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // Register component globally
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

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
