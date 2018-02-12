import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import User from '@/views/user'
import Week from '@/views/week'
import Search from '@/views/search'
import Work from '@/views/work'
import Idea from '@/views/idea'
import Add from '@/views/add'
import Login from '@/views/login'
import Register from '@/views/register'
import Info from '@/views/info'
import Message from '@/views/message'
import Note from '@/views/note'
import Bind from '@/views/bind'
import Teacher from '@/views/teacher'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '默认',
      redirect:{ path:'/home' },
      component: Home
    },
    {
      path: '/home',
      name: '首页',
      component: Home,
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
    {
      path: '/search',
      name: '搜索',
      component: Search   
    },
    {
      path: '/work',
      name: '工作',
      component: Work  
    },
    {
      path: '/idea',
      name: '动态',
      component: Idea  
    },
    {
      path: '/add',
      name: '添加',
      component: Add  
    },    
    {
      path: '/login',
      name: '登录',
      component: Login 
    },      
    {
      path: '/register',
      name: '注册',
      component: Register  
    },      
    {
      path: '/info',
      name: '个人资料',
      component: Info 
    },     
    {
      path: '/message',
      name: '我的消息',
      component: Message
    },     
    {
      path: '/note',
      name: '我的周报',
      component: Note
    },     
    {
      path: '/bind',
      name: '绑定教师',
      component: Bind
    },     
    {
      path: '/teacher',
      name: '教师界面',
      component: Teacher
    },     
  ]
})
