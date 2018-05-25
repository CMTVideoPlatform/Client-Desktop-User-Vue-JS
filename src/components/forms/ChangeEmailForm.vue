<template>
  <form action="#" method="post" @submit.prevent="submit" autocomplete="off">
    <div class="login-form-inner">
      <p><input type="email" placeholder="New Email" v-model="form.email" class="form-control" v-focus></p>
      <p>
        <button :disabled="!isValid" class="btn btn-primary">Update</button>
      </p>
    </div>
  </form>
</template>
<script>
import {formMixins} from './forms.mixins'
export default {
  name: 'change-email-form',
  mixins: [formMixins],
  computed: {
    isValid: function () {
      return this.form.email !== ''
    }
  },
  data () {
    return {
      form: {
        email: ''
      }
    }
  }
}
</script>
