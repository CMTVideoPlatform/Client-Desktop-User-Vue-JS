<template>
  <div>
    <h1>Login Help</h1>
    <h3>Help is on the way. </h3>
    <p>
      If you are in our system, a login help email has been sent.
    </p>
    <p>
      <router-link to="login">Back to login</router-link>
    </p>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'LoginHelpConfirm',
  methods: {
    ...mapMutations({
      clearConfirmFlag: 'app/blockLoginHelpConfirm'
    })
  },
  beforeRouteLeave (to, from, next) {
    this.clearConfirmFlag()
    next()
  }
}
</script>
