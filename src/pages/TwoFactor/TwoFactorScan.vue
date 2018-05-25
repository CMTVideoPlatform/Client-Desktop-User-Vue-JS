<template>
  <div>
    <h3>Setup</h3>
    <p>Next, use
      <strong>Google Authenticator</strong>
      to Scan this QR Code
    </p>
    <p>
      <img :src="twoFactorImg" alt="..." class="img-thumbnail">
    </p>
    <p>
      <router-link to="/two-factor/verify" class="btn btn-primary">Next >> </router-link>
    </p>
  </div>
</template>
<script>
import {endpoints} from '../../services/2fa.service'
export default {
  beforeCreate () {
    const endpoint = endpoints._2faScan
    this.$http.post(endpoint, {}).then(response => {
      console.log(response)
      this.twoFactorImg = response.body.dataURL
      console.log(this.twoFactorImg)
    })
  },
  data () {
    return {
      twoFactorImg: ''
    }
  }
}
</script>
