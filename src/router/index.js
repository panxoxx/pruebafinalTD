import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import Electronica from'@/views/Electronica.vue'
import MenClothing from'@/views/MenClothing.vue'
import WomenClothing from'@/views/WomenClothing.vue'
import Carro from '@/views/Carro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path:'/electronica',
    name:'Electronics',
    component:Electronica
  },

  {
    path:'/ropahombre',
    name:'MenClothing',
    component: MenClothing
  },

  {
    path:'/ropamujer',
    name:'WomenClothing',
    component:WomenClothing
  },

  {
    path:'/carroropamujer',
    name:'Carro',
    component:Carro
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },


  {
    path:'*',
    component:NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
