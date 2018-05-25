<template>
  <div>
    <h3>Setup</h3>
    <p>
      Now, enter the one time password from
      <strong>Google Authenticator</strong>
    </p>
    <one-time-password-form :success="onSuccess" :submitCall="submit" :fail="onFail"/>
    <p>
      <router-link to="/two-factor/scan" class="btn btn-primary">Back</router-link>
    </p>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import OneTimePasswordForm from '@/components/forms/OneTimePasswordForm'
export default {
  name: 'two-factor-verify',
  components: {
    OneTimePasswordForm
  },
  data () {
    return {
      otp: ''
    }
  },
  methods: {
    ...mapActions({
      submit: 'user/verifyOTP'
    }),
    onFail (params) {
      alert(params)
    },
    onSuccess () {
      this.$router.push('/two-factor/success')
    }
  }
}
</script>
