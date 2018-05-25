import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/pages/Account/Account'
import ChangeEmail from '@/pages/Account/ChangeEmail'
import ChangePassword from '@/pages/Account/ChangePassword'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import LoginHelp from '@/pages/LoginHelp'
import LoginHelpConfirm from '@/pages/LoginHelpConfirm'
import Logout from '@/pages/Logout'
import Register from '@/pages/Register'
import RegisterConfirm from '@/pages/RegisterConfirm'
import TwoFactor from '@/pages/TwoFactor/TwoFactor'
import TwoFactorApp from '@/pages/TwoFactor/TwoFactorApp'
import TwoFactorScan from '@/pages/TwoFactor/TwoFactorScan'
import TwoFactorVerify from '@/pages/TwoFactor/TwoFactorVerify'
import TwoFactorSuccess from '@/pages/TwoFactor/TwoFactorSuccess'
import {store} from './stores'

Vue.use(Router)

const isLoginHelpConfirmAllowed = (to, from, next) => {
  const isLoggedIn = store.state.user.isLoggedIn
  const isLoginHelpConfirmAllowed = store.state.app.allowLoginHelpConfirm
  if (!isLoginHelpConfirmAllowed || isLoggedIn) next('/')
  else next()
}
const isRegisterConfirmAllowed = (to, from, next) => {
  const isRegisterConfirmAllowed = store.state.app.allowRegisterConfirm
  if (!isRegisterConfirmAllowed) next('/')
  else next()
}
const onLogout = (to, from, next) => {
  if (store.state.user.isLoggedIn) {
    store.dispatch('user/logout')
      .then(next)
  } else next('/')
}
const requireAuth = (to, from, next) => {
  const isLoggedIn = store.state.user.isLoggedIn
  if (!isLoggedIn) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const alreadyLoggedIn = (to, from, next) => {
  const isLoggedIn = store.state.user.isLoggedIn
  if (isLoggedIn) {
    next({
      path: '/'
    })
  } else {
    next()
  }
}

const router = new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    {
      path: '/account',
      component: Account,
      beforeEnter: requireAuth,
      children: [
        { path: 'email', name: 'Change Email', component: ChangeEmail },
        { path: 'password', name: 'Change Password', component: ChangePassword }
      ]
    },
    { path: '/login', name: 'Login', component: Login, beforeEnter: alreadyLoggedIn },
    { path: '/login-help', name: 'Login Help', component: LoginHelp, beforeEnter: alreadyLoggedIn },
    { path: '/login-help-confirm', name: 'Login Help Confirm', component: LoginHelpConfirm, beforeEnter: isLoginHelpConfirmAllowed },
    { path: '/logout', name: 'Logout', component: Logout, beforeEnter: onLogout },
    { path: '/register', name: 'Register', component: Register },
    { path: '/register-confirm', name: 'Register Confirm', component: RegisterConfirm, beforeEnter: isRegisterConfirmAllowed },
    {
      path: '/two-factor',
      component: TwoFactor,
      beforeEnter: requireAuth,
      children: [
        { path: '', name: 'Two Factor App', component: TwoFactorApp },
        { path: 'scan', name: 'Two Factor Scan', component: TwoFactorScan },
        { path: 'verify', name: 'Two Factor Verify', component: TwoFactorVerify },
        { path: 'success', name: 'Two Factor Success', component: TwoFactorSuccess }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  store.commit('app/successBannerMsg', '', {root: true})
  next()
})

export default router
