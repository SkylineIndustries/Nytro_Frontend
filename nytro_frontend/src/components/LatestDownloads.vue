<template>
  <div class="download-block">
    <h2>Latest Version</h2>
    <p v-if="downloadInfo">
      Version: {{ downloadInfo.version }}<br>
      <a :href="downloadInfo.url" download>Download</a>
    </p>
    <p v-else>
      No version available for download.
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      downloadInfo: null,
    };
  },
  mounted() {
    this.fetchLatestDownload();
  },
  methods: {
    fetchLatestDownload() {
      axios.get('/api/downloads/latest')
          .then(response => {
            this.downloadInfo = response.data;
          })
          .catch(error => {
            console.error('There was an error fetching the download info!', error);
          });
    }
  }
}
</script>

<style scoped>
.download-block {
  background-color: #051e3a;
  padding: 20px;
  text-align: center;
}

.download-block a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}
</style>
