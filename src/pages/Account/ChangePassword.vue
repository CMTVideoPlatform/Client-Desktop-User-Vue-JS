<template>
  <div>
    <h2>Change Password</h2>
    <change-password-form :submitCall="submit"/>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import ChangePasswordForm from '@/components/forms/ChangePasswordForm'
export default {
  name: 'change-password',
  components: {
    ChangePasswordForm
  },
  methods: {
    ...mapActions({
      submit: 'user/changePassword'
    })
  }
}
</script>
