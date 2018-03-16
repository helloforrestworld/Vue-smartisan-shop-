import Vue from 'vue'
import Router from 'vue-router'

import shop from '@/views/shop'

import '@/assets/css/app.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'shop',
      component:shop
    }
  ]
})
