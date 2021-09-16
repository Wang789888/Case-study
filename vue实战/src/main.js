// console.log("ok")
import Vue from 'vue';

// 导入路由包
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import router from './router'

// 引入ElementUI
import { Button, Select } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

// 导入App组件
import app from './App.vue'

var vm = new Vue({
  el:'#app',
  render:c => c(app),
  router
})