// 入口文件
// console.log('OK')
import  Vue from 'vue'

import mockdata from './mock/mock'
// 测试数据
import demodata from './mock/demo'

//导入App组件
import app from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router'

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

import {Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

var vm = new Vue({
  el:'#app',
  render:c => c(app),
  router,
  mockdata,
  demodata
})
