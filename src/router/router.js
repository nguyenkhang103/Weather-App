import Vue from "vue"
import Router from 'vue-router'
import HomeView from '../views/HomeView'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
]
const router = new Router({
  mode: 'history',
  base: `${process.env.BASE_URL}`,
  routes
})

export default router