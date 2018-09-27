import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import 'vue-contextmenu/style/css/font-awesome.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/chat',
      name: 'index',
      component: Index,
      beforeEnter (to, from, next) {
        let token = window.sessionStorage.getItem('sessionId')
        if (token === null || !token || !/\S/.test(token)) {
          next({ name: 'login' })
        } else {
          next()
        }
      }
    },
    {
      path: '/index',
      name: 'chat',
      component: Index,
      beforeEnter (to, from, next) {
        let token = window.sessionStorage.getItem('sessionId')
        if (token === null || !token || !/\S/.test(token)) {
          next({ name: 'login' })
        } else {
          next()
        }
      }
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
