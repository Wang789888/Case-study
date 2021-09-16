import VueRouter from 'vue-router'

// 导入路由
import indexContainer  from './components/index.vue'
import twoContainer from './components/two.vue'

import childrenContainer  from './components/subcoms/children.vue'
import twochildrenContainer from './components/subcoms/subtwo.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    { path: '/index', component: indexContainer  },
    { path: '/two', component: twoContainer },
    { path: '/children', component: childrenContainer },
    { path: '/twochildren', component: twochildrenContainer  }
  ]
})

// 把路由对象暴露出去
export default router