<template>
  <div>
    We Recommend Two Factor Authentication.
    <router-link to="/two-factor">Setup</router-link>
    <a href="#" @click.prevent="remind">Remind Me Later</a>
    <a href="#" @click.prevent="dismiss">Dismiss</a>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'two-factor-banner',
  methods: {
    ...mapMutations({
      dismiss: 'user/dismiss2FA',
      remind: 'user/remind2FA'
    })
  }
}
</script>
