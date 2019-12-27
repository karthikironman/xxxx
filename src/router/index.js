import Vue from 'vue'
import Router from 'vue-router'
import fournotfour from '@/components/pages/404'

Vue.use(Router)
export default new Router({
    mode: "history",
  routes: [
      {
        path: '*',
        name: '404',
        component: fournotfour
      }
  ]
})