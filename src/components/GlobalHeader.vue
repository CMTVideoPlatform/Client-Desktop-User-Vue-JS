<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <span v-if="!isLoggedIn">
        <router-link to="login">Login</router-link>
        <router-link to="register">Register</router-link>
      </span>
      <span v-else>
        <router-link to="/account">Account</router-link>
        <router-link to="/logout">Logout</router-link>
      </span>
    </div>
    <div>
      <global-banners/>
    </div>
    <!--<div>-->
      <!--{{$store.state}}-->
    <!--</div>-->
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
import GlobalBanners from '@/components/banners/GlobalBanners'
export default {
  name: 'global-header',
  components: {
    GlobalBanners
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'user/isLoggedIn'
    })
  }
}
</script>
