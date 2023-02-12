import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
  ]
})