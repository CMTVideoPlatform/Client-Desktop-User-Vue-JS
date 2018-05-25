<template>
  <div>
    <h2>Change Your Email</h2>
    <p>You will need to confirm your email address again if it is changed.</p>
    <p>
      <strong>Current Email:</strong> {{email}}
      <strong>(<span v-if="!emailConfirmed">not</span>  confirmed)</strong>
    </p>
    <change-email-form :submitCall="submit"/>
  </div>
</template>
<script>
import ChangeEmailForm from '@/components/forms/ChangeEmailForm'
import {mapActions, mapGetters} from 'vuex'
export default {
  name: 'change-email',
  components: {
    ChangeEmailForm
  },
  computed: {
    ...mapGetters({
      emailConfirmed: 'user/emailConfirmed',
      email: 'user/email'
    })
  },
  methods: {
    ...mapActions({
      submit: 'user/changeEmail'
    })
  }
}
</script>
