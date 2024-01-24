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
        <Window v-if="windows['Computer']" key="Computer" :windowType="'Computer'" :visible="isWindowVisible('Computer')" :zIndex="zIndex"  @closeWindow="closeWindow('Computer')" />


        <div class="myIcon" @dblclick="handleIconDoubleClick('Folder')">
            <img
                src="../assets/icons/folder.ico"
                width="64"
                height="64"
            />
            <span>Folder</span>
        </div>
        <Window  v-if="windows['Folder']" :key="windows['Folder']" windowType="Folder" :visible="isWindowVisible('Folder')" :zIndex="zIndex"  @closeWindow="closeWindow('Folder')" />

        <div class="myIcon" @dblclick="handleIconDoubleClick('File')">
            <img
                src="../assets/icons/folder.ico"
                width="64"
                height="64"
            />
            <span>File</span>
        </div>
        <Window  v-if="windows['File']" :key="windows['File']" windowType="File" :visible="isWindowVisible('File')" :zIndex="zIndex" @closeWindow="closeWindow('File')" />


        <!-- <div class="window" style="margin: 32px; width: 250px">
            <div class="title-bar">
                <div class="title-bar-text">
                My First Program
                </div>

                <div class="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
                </div>
            </div>
            <div class="window-body">
                <p>Hello, world!</p>
                <section class="field-row" style="justify-content: flex-end">
                <button>OK</button>
                <button>Cancel</button>
                </section>
            </div>
        </div> -->


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
                File: false,
            },
            zIndex: 9,
        };
    },
    methods: {
        handleIconDoubleClick(windowType) {
            // Code to execute when an icon is double-clicked
            console.log(`Icon double-clicked: ${windowType}`);
            this.windows[windowType] = true;
            this.zIndex++;
            console.log(this.zIndex);
            console.log(this.windows);


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