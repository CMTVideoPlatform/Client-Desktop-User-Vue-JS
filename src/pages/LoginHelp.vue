<template>
  <div>
    <h1>Login Help</h1>
    <login-help-form :success="onSuccess" :submitCall="submit"/>
    <p>
      I don't need help, <router-link to="login">back to login</router-link>
    </p>
    <p>
      I don't have an account, <router-link to="register">create an account</router-link>
    </p>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import LoginHelpForm from '@/components/forms/LoginHelpForm'
export default {
  name: 'Login',
  components: {
    LoginHelpForm
  },
  methods: {
    ...mapActions({
      submit: 'user/loginHelp'
    }),
    onSuccess () {
      this.$router.push('/login-help-confirm')
    }
  }
}
</script>
