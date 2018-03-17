import Vue from 'vue'
import Router from 'vue-router'

import shop from '@/views/shop'
import item from '@/views/item'

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
    }
  ]
})
