<template>
  <div>
    <h1>Login</h1>
    <p v-if="$route.query.redirect">
      {{$route.query.redirect}} requires you to be logged in first.
    </p>
    <login-form :success="onSuccess" :submitCall="submit"/>
    <p>
      <router-link to="register">Create An Account</router-link>
    </p>
    <p>
      <router-link to="login-help">Login Help</router-link>
    </p>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import LoginForm from '@/components/forms/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginForm
  },
  methods: {
    ...mapActions({
      submit: 'user/login'
    }),
    onSuccess () {
      const redir = this.$route.query.redirect || '/'
      this.$router.push(redir)
    }
  }
}
</script>
