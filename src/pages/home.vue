<template>
<content-container>
  <div slot="header">
    <router-link :to="{ name: 'Home' }">Home</router-link>
  </div>

  <div slot="card-header">
    <h1>Welcome</h1>
  </div>

  <div slot="card-content">
    <div class="data">
      <p class="text-center">You are currently using</p>
      <p class="text-center">Freshcom Alpha v0.1.0</p>
    </div>
  </div>
</content-container>
</template>

<script>
import LeftNav from '@/components/left-nav'
import PageMixin from '@/mixins/page'

export default {
  name: 'Home',
  mixins: [PageMixin],
  components: {
    LeftNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
