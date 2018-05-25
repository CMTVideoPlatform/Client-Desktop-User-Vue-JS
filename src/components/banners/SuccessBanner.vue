<template>
  <div class="alert alert-success" v-if="msg">
    {{msg}}
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      msg: 'app/successBannerMsg'
    })
  }
}
</script>
