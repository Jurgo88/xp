<!-- Okno.vue -->
<template>
  <div>
    <div class="icons">
      <div @dblclick="openWindow('myComputer')" class="ikona">
        <i class="fas fa-computer-classic">
          <img
            src="https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/64/Computer-icon.png"
            width="64"
            height="64"
          />
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
          <iframe
            src="https://open.spotify.com/embed/playlist/37i9dQZF1F0sijgNaJdgit"
            width="380"
            height="350"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
        <div v-if="currentWindow === 'files'" class="files">This is files</div>
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
      document.getElementById("okno").style.display = "block";
    },
    closeWindow() {
      this.hideAll();
      document.getElementById("okno").style.display = "none";
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
      this.$el.style.top = this.$el.offsetTop - this.pos2 + "px";
      this.$el.style.left = this.$el.offsetLeft - this.pos1 + "px";
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
#okno {
  width: 400px;
  height: 300px;
  border: 1px solid blue;
  left: 300px;
  top: 200px;
  position: absolute;
  z-index: 9;
  background: #eee;
}

#okno.maximizeOkno {
  /* position: relative; */
  top: 3px !important;
  left: 3px !important;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
}

#lista {
  width: auto;
  height: 35px;
  background-color: blue;
}

.content {
  padding: 10px;
  /* visibility: hidden; */
}
.content .myComputer {
  /* visibility: hidden; */
}

.ikona {
  height: 64px;
  width: 64px;
  /* background-color: rebeccapurple;*/
  border: 1px solid red;
  /* position: absolute; */
  bottom: 30px;
  left: 30px;
  /* background-image: url("icons/48x48/actions/go-home.png"); */
  background-repeat: no-repeat;
  background-size: auto;
  margin: 5px;
  padding: 5px;
}

.close {
  height: 24px;
  width: 24px;
  background-color: red;
  top: 3px;
  right: 3px;
  position: absolute;
  /* background-image: url("icons/24x24/actions/gtk-cancel.png"); */
  background-repeat: no-repeat;
  background-size: auto;
}
.maximize {
  height: 24px;
  width: 24px;
  background-color: rgb(187, 121, 59);
  top: 3px;
  right: 33px;
  position: absolute;
}
.normalWindow {
  height: 24px;
  width: 24px;
  background-color: rgb(66, 130, 134);
  top: 3px;
  right: 66px;
  position: absolute;
}
body {
  background: #eee
    url("http://www.top-windows-tutorials.com/images/2013/04/2014-03-Windows-Xp-Bliss-wallpaper.jpg")
    no-repeat fixed center;
  background-size: cover;
}
</style>
