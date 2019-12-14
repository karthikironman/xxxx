import Vue from 'vue'
import Router from 'vue-router'
import front from '@/components/pages/front'
import back from '@/components/pages/back'
import about from '@/components/pages/about'
import fournotfour from '@/components/pages/404'

Vue.use(Router)
export default new Router({
    mode: "history",
  routes: [
    {
      path: '/front',
      name: 'Front',
      component: front
    },
    {
        path: '/back',
        name: 'Back',
        component: back
      },
      {
        path: '/about',
        name: 'About',
        component: about
      },
      {
        path: '*',
        name: 'front',
        component: fournotfour
      }
  ]
})