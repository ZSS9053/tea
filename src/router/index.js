import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Index from '@/components/Index'
import Classify from '@/components/classify'
import Detail from '@/components/Detail'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Mine from '@/components/Mine'
import Discuss from '@/components/Discuss'
import Main from '@/components/Main'
import Cart from '@/components/Cart'
import Artical from '@/components/artical'
Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      children:[
        {path:"/",component:Main},
        {path:'/classify',component:Classify},
        {path:"/discuss",component:Discuss}, 
        {path:"/mine",component:Mine}         
      ]
    },
    {
      path:'/index',
      redirect:'/'
    },
    {
      path: '/detail/:pid',
      component: Detail
    },
    {path:'/classify/:i',component:Classify},
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/artical/:i',
      component: Artical
    }              

  ]
})
