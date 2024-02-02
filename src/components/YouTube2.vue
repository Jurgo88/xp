<template>
    kokot
    <LiteYouTubeEmbed
    :id="videoUrl"
    ref="liteYouTubeEmbed "
    title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
  />

    <button class="play-pause-button" @click="togglePlayPause"> PLay</button>
  </template>
  
  <script setup>
    import { onMounted, ref } from 'vue';
  
    import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
    import 'vue-lite-youtube-embed/style.css'
  

    console.log('YouTube component mounted');
    
    const videoUrl = ref('VLW1ieY4Izw');
    const isPlaying = ref(false);
    const volume = ref(100);
    const progress = ref(0);
    const liteYouTubeEmbed  = ref(null)

    // iframe.value?.stopVideo()
    // iframe.value?.pauseVideo()
    // iframe.value?.playVideo()

    
    const togglePlayPause = () => {
        console.log('Play/Pause button clicked');
        isPlaying.value = !isPlaying.value;
        console.log(isPlaying.value);
        if (isPlaying.value) {
            liteYouTubeEmbed.pause();
        } else {
            liteYouTubeEmbed.play();
        }
    };

//   const togglePlayPause = () => {
//   const frame = document.getElementById('youtubeFrame');
//   if (frame) {
//     // Získání aktuálního stavu přehrávání videa
//     const isVideoPlaying = frame.contentWindow && frame.contentWindow.postMessage({ event: 'command', func: 'isPlaying', args: [] }, '*');
    
//     // Odeslání příkazu pro přehrání nebo pozastavení videa
//     frame.contentWindow.postMessage({ event: 'command', func: isVideoPlaying ? 'pauseVideo' : 'playVideo', args: [] }, '*');

//     // Aktualizace stavu přehrávání
//     isPlaying.value = !isVideoPlaying;
//   }

onMounted(() => {
    // Zde můžete přidat kód, který se spustí po načtení komponenty
    console.log('YouTube component mounted');
    
  });

  </script>
  
  <style scoped>
  /* Zde můžete přidat vlastní styly pro ovládací prvky */
  </style>
  