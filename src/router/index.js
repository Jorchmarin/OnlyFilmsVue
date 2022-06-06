import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Wishlist from '../views/Wishlist.vue'
import Descripcion from '../views/Descripcion.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Bienvenida from '../views/Bienvenida.vue'
import DescripcionNoLog from '../views/DescripcionNoLog.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Bienvenida',
    component: Bienvenida
  },
  {
    path: '/peliculanl/:id',
    name: 'Descripcion pelicula',
    component: DescripcionNoLog
  },
  {
    path: '/pelicula/:id',
    name: 'Descripcion pelicula',
    component: Descripcion
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
