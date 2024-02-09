<template>
    <button class="custom-button" :style="{ height: height + 'px', width: width + 'px' }" @click="handleClick">
        {{ buttonText }}
    </button>
    
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    buttonText: {
        type: String,
        required: true
    },
    height: {
        type: Number
    },
    width:{
        type: Number
    }
});

const handleClick = () => {
    // Handle button click event here
};
</script>

<style scoped>
.custom-button {
    /* Add your custom button styles here */
    height: 80px;
    width: auto;
    font-size: xxx-large;
    padding: 10px 20px;
    background-color: #000;
    color: white;
    background: #000;
    transition: transform 0.3s ease-in-out, background-color 0.3s ease-in;
    border: none;
    border-radius: 0;
    box-shadow: none;
    font-family: 'Roboto Mono', monospace;



}

.custom-button:hover {
    /* Add your custom button hover styles here */
    transform: translateY(-5px);
    transition: transform 0.3s ease-in-out, background-color 1.21s ease-in;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    box-shadow: 0 0 10px #000;

}
</style>
