import Vue from 'vue'
export const app = {
  namespaced: true,
  state: {
    allowLoginHelpConfirm: false,
    allowRegisterConfig: false,
    successBannerMsg: ''
  },
  getters: {
    successBannerMsg: state => state.successBannerMsg
  },
  mutations: {
    allowLoginHelpConfirm (state) {
      Vue.set(state, 'allowLoginHelpConfirm', true)
    },
    allowRegisterConfirm (state) {
      Vue.set(state, 'allowRegisterConfirm', true)
    },
    blockLoginHelpConfirm (state) {
      Vue.set(state, 'allowLoginHelpConfirm', false)
    },
    blockRegisterConfirm (state) {
      Vue.set(state, 'allowRegisterConfirm', false)
    },
    successBannerMsg (state, msg) {
      Vue.set(state, 'successBannerMsg', msg)
    }
  }
}
