import Vue from 'vue'
import VueRouter from 'vue-router'

const home =()=> import ('@/views/home/home')
const fenlei =()=> import ('@/views/fenlei/fenlei')
const shoping =()=> import ('@/views/shoping/shoping')
const my =()=> import ('@/views/my/my')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '',
    component: home
  },
  {
    path: '/fenlei',
    name: '',
    component: fenlei
 
  },
  {
    path: '/shoping',
    name: '',
    component: shoping
 
  },
  {
    path: '/my',
    name: '',
    component: my
 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
