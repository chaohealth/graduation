import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import User from '@/views/user'
import Week from '@/views/week'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '默认',
      component: Home
    },
    {
      path: '/home',
      name: '首页',
      component: Home
    },
    {
      path: '/user',
      name: '我的',
      component: User
    },
    {
      path: '/week',
      name: '周报',
      component: Week
    },    
  ]
})
