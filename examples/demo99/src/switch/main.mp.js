import Vue from 'vue'
import App from './App.vue'
import {Switch, Tooltip} from 'element-ui';

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.use(Switch)
  Vue.use(Tooltip)

  return new Vue({
    el: '#app',
    render: h => h(App)
  })
}
