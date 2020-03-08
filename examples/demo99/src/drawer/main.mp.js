import Vue from 'vue'
import App from './App.vue'
import {Drawer, Button, Radio, RadioGroup, Table, TableColumn, Form, FormItem, Select, Option, MessageBox} from 'element-ui';

export default function createApp() {
  const container = document.createElement('div')
  container.id = 'app'
  document.body.appendChild(container)

  Vue.use(Drawer)
  Vue.use(Button)
  Vue.use(Radio)
  Vue.use(RadioGroup)
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Form)
  Vue.use(FormItem)
  Vue.use(Select)
  Vue.use(Option)

  Vue.prototype.$confirm = MessageBox.confirm

  return new Vue({
    el: '#app',
    render: h => h(App)
  })
}
