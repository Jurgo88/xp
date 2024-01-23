<template>
    <div class="window" :class="{ 'maximized': isMaximized, 'minimalized': isMinimalized, 'hidden': !visible }">
        <div id="lista" @mousedown="dragMouseDown">
            <div class="maximize" @click="maximizeWindow"></div>
            <div class="minimalize" @click="minimalizeWindow"></div>
            <div class="close" @click="closeWindow"></div>
        </div>
        <div class="content">
            <!-- <span class="windowTypeIcon">
                <img :src="windowTypeIcon()" alt="windowType" />
            </span> -->
            <span>{{windowType}}</span>
            <slot></slot>
        </div>
        <div class="footer">
            <slot name="footer">
            </slot>
            <span class="changeSize" @mousedown="startResize" @mouseup="stopResize"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Window',
    props: {
        windowType: {
            type: String,
            default: '',
        },
        visible: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isMaximized: false,
            isMinimalized: false,
            isResizing: false,
            pos1: 0,
            pos2: 0,
            pos3: 0,
            pos4: 0,
        };
    },
    methods: {
        closeWindow() {
            this.$emit('closeWindow', this.windowType);
        },
        dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            this.pos3 = e.clientX;
            this.pos4 = e.clientY;
            document.onmouseup = this.closeDragElement;
            document.onmousemove = this.elementDrag;
        },
        elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            this.pos1 = this.pos3 - e.clientX;
            this.pos2 = this.pos4 - e.clientY;
            this.pos3 = e.clientX;
            this.pos4 = e.clientY;
            this.$el.style.top = (this.$el.offsetTop - this.pos2) + "px";
            this.$el.style.left = (this.$el.offsetLeft - this.pos1) + "px";
        },
        closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        },
        maximizeWindow() {
            this.isMaximized = this.isMaximized ? false : true;
            this.isMinimalized  = false;
            
        },
        minimalizeWindow() {
            this.isMinimalized = this.isMinimalized ? false : true;
            console.log(this.isMinimalized + ' minimalizovane');

            if(this.isMaximized) {
                this.isMaximized = false;
                console.log(this.isMaximized + 'maximalizovane');
            }            
        },
        startResize(e) {            
            this.isResizing = true;
            this.startX = e.clientX;
            this.startY = e.clientY;
            this.startWidth = this.$el.offsetWidth;
            this.startHeight = this.$el.offsetHeight;
            document.addEventListener('mousemove', this.changeSize);
            document.addEventListener('mouseup', this.stopResize);
            this.$el.style.transition = 'none'; // Vypneme prechodovú animáciu
        },
        stopResize() {
            this.isResizing = false;
            document.removeEventListener('mousemove', this.changeSize);
            document.removeEventListener('mouseup', this.stopResize);
            this.$el.style.transition = ''; // Zapneme prechodovú animáciu
        },

        changeSize(e) {
            if (this.isResizing) {
                const deltaX = e.clientX - this.startX;
                const deltaY = e.clientY - this.startY;

                // Definujeme limity
                const minWidth = 640;
                const minHeight = 480;

                // Aktualizujeme velkost okna na základe povodnej velkosti a rozdielu medzi pozíciou myši
                let newWidth = this.startWidth + deltaX;
                let newHeight = this.startHeight + deltaY;

                // Aplikujeme limity
                newWidth = Math.max(minWidth, newWidth);
                newHeight = Math.max(minHeight, newHeight);

                this.$el.style.width = newWidth + 'px';
                this.$el.style.height = newHeight + 'px';
            }
        },


        windowTypeIcon() {
            switch (this.windowType) {
                case 'Folder':
                    return 'icons/24x24/places/folder.png';
                case 'File':
                    return 'icons/24x24/mimetypes/text-x-generic.png';
                case 'My Computer':
                    return 'icons/24x24/places/user-desktop.png';
                case 'Internet Explorer':
                    return 'icons/24x24/apps/internet-web-browser.png';
                default:
                    return 'icons/24x24/places/folder.png';
            }
        },
    },
}
</script>


<style scoped>
.window {
    width: 35%;
    height: 40%;
    border: 1px solid blue;
    left: 300px;
    top: 200px;
    position: absolute;
    z-index: 9;
    background: #eee;
    transition: width 0.3s, height 0.3s; 

}
#lista {
  width: auto;
  height: 35px;
  background-color: blue;
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
.maximized {
    
    width: 100vw !important;
    height: 100% !important;
    top: 0 !important;
    left: 0 !important;
    transition: width 0.5s, height 0.5s; /* Pridaná animácia */

}
.minimalized {
    transition: width 0.5s, height 0.5s; /* Pridaná animácia */
    overflow: hidden; /* Skryje obsah minimalizovaného okna */
    height: 32px !important;
    width: 25dvh !important;

}
.minimalize {
  height: 24px;
  width: 24px;
  background-color: rgb(66, 130, 134);
  top: 3px;
  right: 66px;
  position: absolute;
}
.minimalized .footer {
    display: none;
}
.minimalize:hover, .maximize:hover, .close:hover {
    background-color: rgb(255, 255, 255);
    opacity: 0.5;
}
.footer {
    height: 25px;
    width: fill-available;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
}
.changeSize {
    cursor: nw-resize;
    right: 0;
    position: absolute;
    bottom: 0;
    height: 10px;
    width: 10px;
    background-color: #000;
}

</style>
