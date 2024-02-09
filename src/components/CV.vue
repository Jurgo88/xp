<template>
    <div>
        Bucka bass kolbasor
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'My CV',
            description: 'This is my CV component',
        };
    },
    computed: {
        // Define computed properties here
    },
    methods: {
        // Define methods here
    },
    // Define lifecycle hooks here
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
