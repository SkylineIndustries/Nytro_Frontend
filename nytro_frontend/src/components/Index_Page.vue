<template>
  <div class="hello">
    <h1>Open source re-implementation of Rollercoaster tycoon 3</h1>
    <p>This is Rollercoaster Tycoon 3 like you have never seen before</p>
    <LatestDownload />
  </div>


</template>

<script>
import LatestDownload from './LatestDownloads.vue';

export default {
  name: 'Index_Page',
  components: {
    LatestDownload
  }
}
</script>
