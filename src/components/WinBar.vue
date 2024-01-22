<template>
    <div class="taskbar">
        <div class="start-button">
            <img src="https://icons.iconarchive.com/icons/kyo-tux/aeon/64/System-Windows-icon.png" alt="Start Button" />
        </div>
        <div class="taskbar-icons">
            <div v-for="icon in taskbarIcons" :key="icon.id" class="taskbar-icon">
                <img :src="icon.icon" :alt="icon.name" />
                <span>{{ icon.name }}</span>
            </div>
        </div>
        <div class="system-tray">
            <!-- System tray icons -->
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            taskbarIcons: [
                { id: 1, name: "My Computer", icon: "https://icons.iconarchive.com/icons/icons-land/vista-hardware-devices/48/Computer-icon.png" },
                { id: 2, name: "Internet Explorer", icon: "/path/to/internet-explorer-icon.png" },
                // Add more icons as needed
            ]
        };
    }
};
</script>

<style scoped>
.taskbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #1e69de;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
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
}

.taskbar-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: #fff;
}

.system-tray {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fff;
}
</style>
