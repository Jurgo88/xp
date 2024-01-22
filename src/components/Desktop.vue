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

    </div>
    <WinBar />
</template>

<script>
import Window from './Window.vue';
import WinBar from './WinBar.vue';

export default {
    name: 'Desktop',
    components: {
        Window,
        WinBar,
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
            },
        };
    },
    methods: {
        handleIconDoubleClick(windowType) {
            // Code to execute when an icon is double-clicked
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
  