<template>
  <div>
    <h1>Success!</h1>
    <h3>Your account has been created.</h3>
    <p>
      Please check your email form our welcome message and email confirmation link.
    </p>
    <p>
      <router-link to="login">Login</router-link>
    </p>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'RegisterConfirm',
  methods: {
    ...mapMutations({
      clearConfirmFlag: 'app/blockRegisterConfirm'
    })
  },
  beforeRouteLeave (to, from, next) {
    this.clearConfirmFlag()
    next()
  }
}
</script>
