<template>
  <div id="app">
    <global-header/>
    <router-view/>
  </div>
</template>
<script>
import GlobalHeader from '@/components/GlobalHeader'
export default {
  name: 'app',
  components: {
    GlobalHeader
  }
}
</script>
