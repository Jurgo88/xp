<template>
    <div>
        <h3>My Computer</h3>
        <p><strong>Operating System:</strong> {{ operatingSystem }}</p>
        <p><strong>Browser:</strong> {{ browser }}</p>
        <p><strong>Screen Resolution:</strong> {{ screenResolution }}</p>
        <p><strong>IP Address:</strong> {{ ipAddress }}</p>
        <p><strong>Username:</strong> {{ username }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            operatingSystem: '',
            browser: '',
            screenResolution: '',
            ipAddress: '',
            username: ''
        };
    },
    mounted() {
        this.getComputerInfo();
    },
    methods: {
        getComputerInfo() {
            this.operatingSystem = window.navigator.platform;
            this.browser = window.navigator.userAgent;
            this.screenResolution = window.screen.width + 'x' + window.screen.height;
            // You can use an API to get the user's IP address
            // For example, you can use the ipify API (https://www.ipify.org/)
            // Here's an example of how to fetch the IP address using the ipify API
            fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    this.ipAddress = data.ip;
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            // You can get the username from the user's session or authentication system
            // Replace 'getUsernameFromSession' with your own implementation
            this.username = this.getUsernameFromSession();
        },
        getUsernameFromSession() {
            // Replace this with your own implementation to get the username from the session
            // For example, if you are using Vue.js with Vuex, you can use the following code:
            // return this.$store.state.user.username;
            // If you are using a different authentication system, refer to its documentation
            return 'Tvoj Tatko';
        }
    }
};
</script>
