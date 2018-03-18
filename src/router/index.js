import Vue from 'vue'
import Router from 'vue-router'

import shop from '@/views/shop'
import item from '@/views/item'
import shopList from '@/views/shoplist'
import checkOut from '@/views/checkout'
import payment from '@/views/payment'
import account from '@/views/account'
import order from '@/views/account/order'
import ads from '@/views/account/ads'

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
    },
    {
      path:'/account',
      component:account,
      children:[
        {
          path:'',
          name:'account',
          component:order
        },
        {
          path:'address',
          name:'ads',
          component:ads
        }
      ]
    }
  ]
})
