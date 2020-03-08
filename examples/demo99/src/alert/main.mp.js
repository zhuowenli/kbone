import Vue from 'vue'
import App from './App.vue'
import {Alert} from 'element-ui';

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.use(Alert)

  return new Vue({
    el: '#app',
    render: h => h(App)
  })
}
