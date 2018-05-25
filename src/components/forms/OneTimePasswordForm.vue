<template>
  <form action="#" method="post" @submit.prevent="submit" autocomplete="off">
    <div class="login-form-inner">
      <p><input type="otp" placeholder="One Time Password" v-model="form.otp" class="form-control" v-focus></p>
      <p>
        <button :disabled="!isValid" class="btn btn-primary">Verify</button>
      </p>
    </div>
  </form>
</template>
<script>
import {formMixins} from './forms.mixins'
export default {
  name: 'one-time-password-form',
  mixins: [formMixins],
  computed: {
    isValid: function () {
      return this.form.otp !== ''
    }
  },
  data () {
    return {
      form: {
        otp: '123456'
      }
    }
  }
}
</script>
