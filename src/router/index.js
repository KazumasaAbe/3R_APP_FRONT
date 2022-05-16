import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/loginPage.vue'
import helloWorld from '../views/helloWorld.vue'
import change from '../views/passwordChangePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta: { title: 'ログイン'}
    },
    {
      path: '/test',
      name:'helloWorld',
      component: helloWorld,
      meta: { title: 'test' }
    },
    {
      path: '/change',
      name: 'change',
      component: change,
      meta: { title: 'パスワード変更' }
    }
  ]
})

