<template>
  <form action="#" method="post" @submit.prevent="submit">
    <div class="login-form-inner">
      <p><input type="username" name="email" placeholder="Email" v-model="form.email" class="form-control"></p>
      <p>
        <button :disabled="!isValid" class="btn btn-primary">Get Help</button>
      </p>
    </div>
  </form>
</template>
<script>
import {formMixins} from './forms.mixins'
export default {
  name: 'login-help-form',
  mixins: [formMixins],
  computed: {
    isValid: function () {
      return this.form.email !== ''
    }
  },
  data () {
    return {
      form: {
        email: 'larry.l.sharpe@gmail.com'
      }
    }
  }
}
</script>
