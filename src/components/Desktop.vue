<template>
    <div class="desktop">
        <div class="myIcon" @dblclick="handleIconDoubleClick('Computer')">
          <img
            src="../assets/icons/myComputer.ico"
            width="64"
            height="64"
          />
        <div>Computer</div>
        </div>
        <!-- <Window v-if="windows['Computer']" key="Computer" :windowType="Computer" :visible="isWindowVisible('Computer')"  @closeWindow="closeWindow('Computer')" /> -->
        <Window v-if="windows['Computer']" key="Computer" :windowType="'Computer'" :visible="isWindowVisible('Computer')" @closeWindow="closeWindow('Computer')" />


        <div class="myIcon" @dblclick="handleIconDoubleClick('Folder')">
            <img
                src="../assets/icons/folder.ico"
                width="64"
                height="64"
            />
            <span>Folder</span>
        </div>
        <Window  v-if="windows['Folder']" :key="windows['Folder']" windowType="Folder" :visible="isWindowVisible('Folder')" @closeWindow="closeWindow('Folder')" />


        <div class="myIcon" @dblclick="handleIconDoubleClick('File')">
            <img
                src="../assets/icons/folder.ico"
                width="64"
                height="64"
            />
            <span>File</span>
        </div>
        <Window  v-if="windows['File']" :key="windows['File']" windowType="File" :visible="isWindowVisible('File')" @closeWindow="closeWindow('File')" />
   
        <div class="myIcon" @dblclick="handleIconDoubleClick('YouTube')">
            <img
                src="../assets/icons/folder.ico"
                width="64"
                height="64"
            />
            <span>YouTube</span>
        </div>
        <Window  v-if="windows['YouTube']" :key="windows['YouTube']" windowType="YouTube" :visible="isWindowVisible('YouTube')" @closeWindow="closeWindow('YouTube')" />
   
        <div class="myIcon" @dblclick="handleIconDoubleClick('YouTube2')">
            <img
                src="../assets/icons/folder.ico"
                width="64"
                height="64"
            />
            <span>YouTube</span>
        </div>
        <Window  v-if="windows['YouTube2']" :key="windows['YouTube2']" windowType="YouTube2" :visible="isWindowVisible('YouTube2')" @closeWindow="closeWindow('YouTube2')" />



        <div class="myIcon" @dblclick="handleIconDoubleClick('CV')">
            <img src="../assets/icons/183.ico" width="64" height="64" />
            <span>CV</span>
        </div>
        <Window v-if="windows['CV']" :key="windows['CV']" windowType="CV" :visible="isWindowVisible('CV')" @closeWindow="closeWindow('CV')" />

        <div class="myIcon" @dblclick="handleIconDoubleClick('Sandbox')">
            <img src="../assets/icons/148.ico" width="64" height="64" />
            <span>Sandbox</span>
        </div>
        <Window v-if="windows['Sandbox']" :key="windows['Sandbox']" windowType="Sandbox" :visible="isWindowVisible('Sandbox')" @closeWindow="closeWindow('Sandbox')" />

    </div>
    <WinBar />
</template>

<script>
import Window from './Window.vue';
import WinBar from './WinBar.vue';
import YouTube from './YouTube.vue';

export default {
    name: 'Desktop',
    components: {
        Window,
        WinBar,
        YouTube,
    },
    props: {
        visible: {
            type: Boolean,
            default: false,
        },
        msg: String,
    },
    data() {
        return {
            windows: {
                Computer: false,
                Folder: false,
                File: false,
                YouTube: false,
                YouTube2: false,
                CV: false,
                Sandbox: false,
            },
        };
    },
    methods: {
        handleIconDoubleClick(windowType) {
            console.log(`Icon double-clicked: ${windowType}`);
            this.windows[windowType] = true;


        },
        isWindowVisible(windowType) {
            return this.windows[windowType];
        },
        closeWindow(windowType) {
            console.log(`Closing window: ${windowType}`);
            this.windows[windowType] = false;
        },
    },
};
</script>

<style>
.myIcon {
    height: 84px;
    width: 70px;
    /* background-color: aliceblue; */
    margin: 5px;
    padding: 5px;
}
.myIcon:hover {
    background-color: #ccc;
    opacity: 0.7;
}
.myIcon i {
    margin-right: 5px;
}
</style>
  