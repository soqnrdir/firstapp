import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//vueRouter를 사용한다고 명시
Vue.use(VueRouter)

const routes = [
  { 
    //localhost:8080 상태일때
    path: '/',
    name: 'Home',
    component: Home
  },
  { 
    //localhost:8080/about 상태일때 화면 전환
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
