import Vue from 'vue'
import Router from 'vue-router'

import shop from '@/views/shop'
import item from '@/views/item'
import shopList from '@/views/shoplist'
import checkOut from '@/views/checkout'
import payment from '@/views/payment'

import '@/assets/css/app.css'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'shop',
      component:shop
    },
    {
      path:'/item',
      name:'item',
      component:item
    },
    {
      path:'/shopList',
      name:'shopList',
      component:shopList
    },
    {
      path:'/checkOut',
      name:'checkout',
      component:checkOut
    },
    {
      path:'/payment',
      name:'payment',
      component:payment
    }
  ]
})
