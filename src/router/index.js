import Vue from 'vue'
import Router from 'vue-router'

import Page404 from '@/pages/404'
import Login from '@/pages/Login'

import UserCreate from '@/pages/user/Create'
import UserPages from '@/pages/user/Pages'

import RoleCreate from '@/pages/role/Create'
import RolePages from '@/pages/role/Pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {path: '/user/pages'}
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { singlePage: true }
    },

    {
      path: '/user/create',
      name: 'UserCreate',
      component: UserCreate
    }, {
      path: '/user/update',
      name: 'UserUpdate',
      component: UserCreate
    }, {
      path: '/user/pages',
      name: 'UserPages',
      component: UserPages
    },

    {
      path: '/role/create',
      name: 'RoleCreate',
      component: RoleCreate
    }, {
      path: '/role/pages',
      name: 'RolePages',
      component: RolePages
    },

    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ]
})
