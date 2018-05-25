<template>
  <form action="#" method="post" @submit.prevent="submit" autocomplete="off">
    <div class="login-form-inner">
      <p><input type="password" placeholder="Old Password" v-model="form.old" class="form-control" v-focus></p>
      <p><input type="password" placeholder="New Password" v-model="form.update" class="form-control"></p>
      <p><input type="password" placeholder="Confirm New Password" v-model="form.confirm" class="form-control"></p>
      <p>
        <button :disabled="!isValid" class="btn btn-primary">Update</button>
      </p>
    </div>
  </form>
</template>
<script>
import {formMixins} from './forms.mixins'
export default {
  name: 'change-password-form',
  mixins: [formMixins],
  computed: {
    isValid: function () {
      return this.form.old !== ''
    }
  },
  data () {
    return {
      form: {
        confirm: 'password1',
        old: 'AsDf12!@-',
        update: 'password1'
      }
    }
  }
}
</script>
