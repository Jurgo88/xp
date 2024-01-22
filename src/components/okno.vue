<!-- Okno.vue -->
<template>
    <div>
      <div class="icons">
        <div @dblclick="openWindow('myComputer')" class="ikona">
          <i class="fas fa-computer-classic">
            <img src="https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/64/Computer-icon.png" width="64" height="64" />
          </i>
        </div>
        <div @dblclick="openWindow('files')" class="ikona"></div>
      </div>
      <div id="okno" :class="{ maximizeOkno: isMaximized }">
        <div id="lista" @mousedown="dragMouseDown">
          <div class="maximize" @click="maximizeWindow"></div>
          <div class="normalWindow" @click="normalizeWindow"></div>
          <div class="close" @click="closeWindow"></div>
        </div>
  
        <div class="content">
          <div v-if="currentWindow === 'myComputer'" class="myComputer">
            This is my computer
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1F0sijgNaJdgit" width="380" height="350" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
          <div v-if="currentWindow === 'files'" class="files">
            This is files
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentWindow: null,
        isMaximized: false,
        pos1: 0,
        pos2: 0,
        pos3: 0,
        pos4: 0,
      };
    },
    methods: {
      openWindow(windowType) {
        this.currentWindow = windowType;
        document.getElementById('okno').style.display = 'block';
      },
      closeWindow() {
        this.hideAll();
        document.getElementById('okno').style.display = 'none';
        this.isMaximized = false;
      },
      maximizeWindow() {
        this.isMaximized = true;
      },
      normalizeWindow() {
        this.isMaximized = false;
      },
      hideAll() {
        this.currentWindow = null;
      },
      dragMouseDown(e) {
        e.preventDefault();
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        document.onmouseup = this.closeDragElement;
        document.onmousemove = this.elementDrag;
      },
      elementDrag(e) {
        e.preventDefault();
        this.pos1 = this.pos3 - e.clientX;
        this.pos2 = this.pos4 - e.clientY;
        this.pos3 = e.clientX;
        this.pos4 = e.clientY;
        this.$el.style.top = this.$el.offsetTop - this.pos2 + 'px';
        this.$el.style.left = this.$el.offsetLeft - this.pos1 + 'px';
      },
      closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Vaše štýly z main.css môžete sem skopírovať */
  </style>
  
