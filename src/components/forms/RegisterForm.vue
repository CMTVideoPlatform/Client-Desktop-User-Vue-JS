<template>
  <form action="#" method="post" @submit.prevent="submit">
    <div class="join-form-inner">
      <p><input type="email" name="email" placeholder="Email" v-model="form.email" class="form-control" v-focus></p>
      <p><input type="username" name="username" placeholder="Username" v-model="form.username" class="form-control"></p>
      <p><input type="password" name="password" placeholder="Password" v-model="form.password" class="form-control"></p>
      <p>
        <button :disabled="!isValid" class="btn btn-primary">Register</button>
      </p>
    </div>
  </form>
</template>
<script>
import {formMixins} from './forms.mixins'
export default {
  computed: {
    isValid: function () {
      return this.form.password !== '' && this.form.username !== '' && this.form.email !== ''
    }
  },
  data () {
    return {
      form: {
        email: 'larry.l.sharpe@gmail.com',
        password: 'royalties',
        username: 'lsharpe'
      }
    }
  },
  mixins: [formMixins]
}
</script>
