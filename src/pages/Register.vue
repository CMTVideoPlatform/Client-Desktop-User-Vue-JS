<template>
  <div>
    <h1>Register</h1>
    <register-from :success="onSuccess" :submitCall="submit"/>
    <p>
      I already have an account, <router-link to="login">back to login</router-link>
    </p>
    <p>
      <router-link to="login-help">Login Help</router-link>
    </p>
  </div>
</template>
<script>
import {mapActions, mapMutations} from 'vuex'
import RegisterFrom from '@/components/forms/RegisterForm'
export default {
  name: 'register',
  components: {
    RegisterFrom
  },
  methods: {
    ...mapMutations({
      setConfirmFlag: 'app/allowRegisterConfirm'
    }),
    ...mapActions({
      submit: 'user/register'
    }),
    onSuccess () {
      this.setConfirmFlag()
      this.$router.push('/register-confirm')
    }
  }
}
</script>
