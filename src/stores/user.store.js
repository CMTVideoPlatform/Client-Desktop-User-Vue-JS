import Vue from 'vue'
import {endpoints} from '../services/2fa.service'

const mockUser = {
  _2fa: {
    isVerified: false,
    isEnabled: false,
    isDismissed: false,
    hasReminder: false,
    secret: '',
    tempSecret: ''
  },
  email: 'user1@gmail.com',
  emailConfirmed: false,
  isLoggedIn: true,
  roles: ['guest'],
  slug: 'user-1',
  username: 'user 1'
}
const defaultVals = {
  _2fa: {
    isVerified: false,
    isEnabled: false,
    isDismissed: false,
    hasReminder: false,
    secret: '',
    tempSecret: ''
  },
  email: '',
  emailConfirmed: false,
  isLoggedIn: false,
  roles: ['guest'],
  slug: null,
  username: null
}

export const user = {
  namespaced: true,
  state: {
    _2fa: defaultVals._2fa,
    emailConfirmed: defaultVals.emailConfirmed,
    email: defaultVals.emaiL,
    isLoggedIn: defaultVals.isLoggedIn,
    roles: defaultVals.roles,
    slug: defaultVals.slug,
    username: defaultVals.username
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    roles: state => state.roles,
    slug: state => state.slug,
    username: state => state.username,
    _2faEnabled: state => state._2fa.isEnabled,
    _2faDismissed: state => state._2fa._2faDismissed,
    email: state => state.email,
    emailConfirmed: state => state.emailConfirmed,
    showActivationWarning: state => {
      return state.isLoggedIn && !state.emailConfirmed
    },
    show2faWarning: state => {
      return state.isLoggedIn && !state._2fa.isDismissed &&
        !state._2fa.hasReminder && !state._2fa.isEnabled &&
        !state._2fa.isVerified
    }
  },
  mutations: {
    dismiss2FA: (state) => {
      Vue.set(state._2fa, 'hasReminder', true)
    },
    remind2FA: (state) => {
      Vue.set(state._2fa, 'isDismissed', true)
    },
    login: (state, user) => {
      Vue.set(state, 'isLoggedIn', true)
    },
    logout: state => {
      Vue.set(state, 'isLoggedIn', false)
    },
    reset: state => {
      for (let k in defaultVals) Vue.set(state, k, defaultVals[k])
    },
    set: (state, obj) => {
      for (let k in defaultVals) if (obj[k]) Vue.set(state, k, obj[k])
    },
    verifyOTP: state => {
      Vue.set(state._2fa, 'isVerified', true)
    }
  },
  actions: {
    init ({commit}) {
      let user = this._vm.$localStorage.get('user')
      if (user) {
        user = JSON.parse(user)
        commit('set', user)
      }
    },
    changeEmail ({commit}, email) {
      return new Promise((resolve, reject) => {
        console.log(email)
        commit('app/successBannerMsg', 'Email Changed', {root: true})
        commit('set', email)
        commit('emailConfirmed', false)
        resolve()
      })
    },
    changePassword ({commit}, old, newPass) {
      return new Promise((resolve, reject) => {
        commit('app/successBannerMsg', 'Password Changed', {root: true})
        resolve()
      })
    },
    login ({commit}, user) {
      return new Promise((resolve, reject) => {
        // todo: remove mock user
        user = mockUser
        const userStr = JSON.stringify(user)
        commit('set', user)
        this._vm.$localStorage.set('user', userStr)
        resolve()
      })
    },
    loginHelp ({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('app/allowLoginHelpConfirm', null, {root: true})
        resolve()
      })
    },
    logout ({commit}) {
      return new Promise((resolve, reject) => {
        commit('reset')
        this._vm.$localStorage.set('user', '')
        resolve()
      })
    },
    register ({commit}) {
      return new Promise((resolve, reject) => {
        resolve()
      })
    },
    verifyOTP ({commit}, otp) {
      const body = {
        token: otp
      }
      return new Promise((resolve, reject) => {
        const endpoint = endpoints._2faVerify
        this._vm.$http.post(endpoint, body)
          .then(response => {
            if (response.status === 200) {
              // this.twofactor.secret = this.twofactor.tempSecret;
              // this.twofactor.tempSecret = "";
              commit('verifyOTP')
              resolve()
            }
          })
          .catch(err => reject(new Error(err)))
      })
    }
  }
}
