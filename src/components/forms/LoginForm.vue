<template>
  <form action="#" method="post" @submit.prevent="submit" autocomplete="off">
    <div class="login-form-inner">
      <p><input type="username" name="username" placeholder="Username" v-model="form.username" class="form-control" v-focus></p>
      <p><input type="password" name="password" placeholder="Password" v-model="form.password" class="form-control"></p>
      <p>
        <button :disabled="!isValid" class="btn btn-primary">Login</button>
      </p>
    </div>
  </form>
</template>
<script>
import {formMixins} from './forms.mixins'
export default {
  name: 'login-form',
  mixins: [formMixins],
  computed: {
    isValid: function () {
      return this.form.password !== '' && this.form.username !== ''
    }
  },
  data () {
    return {
      form: {
        password: 'royalties',
        username: 'user 1'
      }
    }
  }
}
</script>
