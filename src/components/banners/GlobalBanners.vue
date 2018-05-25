<template>
  <div>
    <email-confirmation-banner v-if="showEmailConf" class="alert alert-warning"/>
    <two-factor-banner v-if="show2fa" class="alert alert-warning"/>
    <success-banner/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import TwoFactorBanner from '@/components/banners/2FactorBanner'
import EmailConfirmationBanner from '@/components/banners/EmailConfirmationBanner'
import SuccessBanner from '@/components/banners/SuccessBanner'
export default {
  name: 'global-banners',
  components: {
    EmailConfirmationBanner,
    SuccessBanner,
    TwoFactorBanner
  },
  computed: {
    ...mapGetters({
      emailConfirmed: 'user/emailConfirmed',
      isLoggedIn: 'user/isLoggedIn',
      showActivationWarning: 'user/showActivationWarning',
      show2faWarning: 'user/show2faWarning'
    }),
    showEmailConf () {
      return this.isLoggedIn && !this.emailConfirmed && this.$route.path !== '/account/email'
    },
    show2fa () {
      return this.$route.matched[0].path !== '/two-factor' && this.show2faWarning
    }
  }
}
</script>
