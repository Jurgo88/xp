<template>
    <div class="taskbar">
        <div class="start-button">
            <img src="../assets/icons/start.png" alt="Start Button" />
        </div>
        <div class="taskbar-icons">
            Tu budu Ikonky SPD
        </div>
        <div class="system-tray">
            Tu budu Mionimalizovane picovine
        </div>
        <div class="time">
            <span>10:00 AM</span>
        </div>
    </div>
</template>

<script setup>
const taskbarIcons = [
  { id: 1, name: "My Computer", icon: "https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/48/Computer-icon.png" },
  { id: 2, name: "Internet Explorer", icon: "/path/to/internet-explorer-icon.png" },
    { id: 3, name: "Recycle Bin", icon: "/path/to/recycle-bin-icon.png" },
  // Add more icons as needed

];
</script>

<style scoped>
.taskbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: #1e69de;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.start-button {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #fff;
}

.taskbar-icons {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    border-right: 4px solid #0e51bd;
    height: 80%;
}

.taskbar-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: #da1e1e;
}

.system-tray {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
    flex: 8;
}
.time {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #fff;
    flex: 1;
}
.time span {
    font-size: 12px;
    position: absolute;
    right: 20px;
}
</style>
