import Vue from 'vue'
import App from './App.vue'
import {Progress, ButtonGroup, Button} from 'element-ui';

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.use(Progress)
  Vue.use(ButtonGroup)
  Vue.use(Button)

  return new Vue({
    el: '#app',
    render: h => h(App)
  })
}
