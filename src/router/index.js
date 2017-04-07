import Vue from 'vue'
import Router from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import '@/assets/scss/reset.css'
import ElementUI from 'element-ui'

import Home from '@/components/page/Home.vue'
import About from '@/components/page/About.vue'
import Adviser from '@/components/page/Adviser.vue'
import Coffee from '@/components/page/Coffee.vue'
import Seller from '@/components/page/Seller.vue'
import header from '@/components/page/User.vue'

Vue.use(Router);
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'Hello',
      component: header
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/adviser',
      name: 'Adviser',
      component: Adviser
    },
    {
      path: '/coffee',
      name: 'Coffee',
      component: Coffee
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '*',
      name: 'Home',
      component: Home
    }
  ]
})
