<template>
    <div style="height: auto;">
        <h3>My Computer</h3>
        <p><strong>Operating System:</strong> {{ operatingSystem }}</p>
        <p><strong>Platform:</strong> {{ platform }}</p>
        <p><strong>Engine:</strong> {{ engine }}</p>
        <p><strong>Browser:</strong> {{ browser }}</p>
        <p><strong>Screen Resolution:</strong> {{ screenResolution }}</p>
        <p><strong>IP Address:</strong> {{ ipAddress }}</p>
        <p><strong>Username:</strong> {{ username }}</p>
    </div>
    <div style="height: auto;">
        <h3>My Computer</h3>
        <p><strong>Operating System:</strong> {{ operatingSystem }}</p>
        <p><strong>Platform:</strong> {{ platform }}</p>
        <p><strong>Engine:</strong> {{ engine }}</p>
        <p><strong>Browser:</strong> {{ browser }}</p>
        <p><strong>Screen Resolution:</strong> {{ screenResolution }}</p>
        <p><strong>IP Address:</strong> {{ ipAddress }}</p>
        <p><strong>Username:</strong> {{ username }}</p>
    </div>
    <div style="height: auto;">
        <h3>My Computer</h3>
        <p><strong>Operating System:</strong> {{ operatingSystem }}</p>
        <p><strong>Platform:</strong> {{ platform }}</p>
        <p><strong>Engine:</strong> {{ engine }}</p>
        <p><strong>Browser:</strong> {{ browser }}</p>
        <p><strong>Screen Resolution:</strong> {{ screenResolution }}</p>
        <p><strong>IP Address:</strong> {{ ipAddress }}</p>
        <p><strong>Username:</strong> {{ username }}</p>
    </div>
    <div style="height: auto;">
        <h3>My Computer</h3>
        <p><strong>Operating System:</strong> {{ operatingSystem }}</p>
        <p><strong>Platform:</strong> {{ platform }}</p>
        <p><strong>Engine:</strong> {{ engine }}</p>
        <p><strong>Browser:</strong> {{ browser }}</p>
        <p><strong>Screen Resolution:</strong> {{ screenResolution }}</p>
        <p><strong>IP Address:</strong> {{ ipAddress }}</p>
        <p><strong>Username:</strong> {{ username }}</p>
    </div>
    <div style="height: auto;">
        <h3>My Computer</h3>
        <p><strong>Operating System:</strong> {{ operatingSystem }}</p>
        <p><strong>Platform:</strong> {{ platform }}</p>
        <p><strong>Engine:</strong> {{ engine }}</p>
        <p><strong>Browser:</strong> {{ browser }}</p>
        <p><strong>Screen Resolution:</strong> {{ screenResolution }}</p>
        <p><strong>IP Address:</strong> {{ ipAddress }}</p>
        <p><strong>Username:</strong> {{ username }}</p>
    </div>
</template>

<script setup>
import Bowser from 'bowser';
import { ref, onMounted } from 'vue';

const operatingSystem = ref('');
const browser = ref('');
const screenResolution = ref('');
const ipAddress = ref('');
const username = ref('');
const platform = ref('');
const engine = ref('');

onMounted(() => {
  getComputerInfo();
  console.log(Bowser.parse(window.navigator.userAgent));
  console.log(this);
  
});

const getComputerInfo = () => {
  const browserInfo = Bowser.getParser(window.navigator.userAgent);

  operatingSystem.value = `${browserInfo.getOSName()} ${browserInfo.getOSVersion()}`;
  browser.value = `${browserInfo.getBrowserName()} ${browserInfo.getBrowserVersion()}`;
  platform.value = browserInfo.getPlatformType();
  engine.value = browserInfo.getEngineName();
  screenResolution.value = `${window.screen.width}x${window.screen.height}`;

  // Fetch IP address
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      ipAddress.value = data.ip;
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // Get username
  username.value = getUsernameFromSession();
};

const getUsernameFromSession = () => {
  // Replace this with your own implementation to get the username from the session
  // For example, if you are using Vue.js with Vuex, you can use the following code:
  // return this.$store.state.user.username;
  // If you are using a different authentication system, refer to its documentation
  return 'Tvoj Tatko';
};
</script>

