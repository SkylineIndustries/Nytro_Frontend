<template>
  <div id="app" class="img">
    <Index_Page/>
  </div>
</template>

<script>
import Index_Page from './components/Index_Page.vue'

export default {
  name: 'App',
  components: {
    Index_Page
  }
}
</script>

<style>
#app {
  font-family: 'JetBrains Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFFF;
  margin-top: 60px;
}

img {
  width: 512px;
  height: 512px;
}
</style>
