<template>
<vue-plyr ref="plyr">
  <div class="plyr__video-embed">
    <iframe
      src="https://www.youtube.com/embed/VLW1ieY4Izw"
      allowfullscreen
      allowtransparency
      allow="autoplay"
    ></iframe>
  </div>
</vue-plyr>
</template>
  
  <script>
    export default {
      name: 'Component',
      mounted () {
        this.$refs.plyr.player.on('event', () => console.log('event fired'))
      }
    }
  </script>

<style scoped>
    @import url('https://cdn.plyr.io/3.7.8/plyr.css'); 

        .player {
    --plyr-color-main: #1ac266;
  }

  .plyr__controls {
    color: #1ac266;
    height: 10px;
    }
</style>