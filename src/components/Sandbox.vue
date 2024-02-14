<template>
    <div class="sandbox">
        <div class="imageTop">

        </div>
        <div class="titleWrap">
            <h2 class="myTitle" :style="myTitleStyle">{{ titleFirstLine }}
                <div class="titleBackground" :style="myTitleBackgroundStyle"></div>
            </h2>
        </div>
        <div v-if="titleSecondLine" class="titleWrap">
            <h2 class="myTitle" :style="myTitleStyle">{{titleSecondLine}}
                <div class="titleBackground" :style="myTitleBackgroundStyle"></div>
            </h2>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="imageBottom">
            
        </div>

        <CustomButton buttonText="Learn More" height="" width="" @click="handleClick"/>
    </div>
</template>

<script setup>
// Add props, ref, computed, and other composition API properties here
import CustomButton from './CustomButton.vue';
import { ref } from 'vue'

const titleFirstLine = 'FuckIT';
const titleSecondLine = '';

const myTitleStyle = ref({
    color: '',
    visibility: 'hidden',
});

const myTitleBackgroundStyle = ref({
    width: '0',
    height: '0px',
    position: 'absolute',
    zIndex: -1
});

const handleClick = () => {
    // Handle button click event here

    myTitleStyle.value.visibility == 'visible' ? myTitleStyle.value.visibility = 'hidden' : myTitleStyle.value.visibility = 'visible';
    myTitleStyle.value.opacity == '1' ? myTitleStyle.value.opacity = '0' : myTitleStyle.value.opacity = '1';
    myTitleStyle.value.top == '0' ? myTitleStyle.value.top = '80px' : myTitleStyle.value.top = '0';
    myTitleBackgroundStyle.value.height == '50px' ? myTitleBackgroundStyle.value.height = '0px' : myTitleBackgroundStyle.value.height = '50px';
    myTitleBackgroundStyle.value.width == '100%' ? myTitleBackgroundStyle.value.width = '0' : myTitleBackgroundStyle.value.width = '100%';
};

</script>

<style scoped>
/* Add component-specific styles here */
.sandbox {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    height: 100%;
    width: 100%;
    background-color: #f0f0f0;
}
.myBtn {
    color: red;
}
.myTitle {
    color: rgb(186, 186, 219);
    visibility: hidden;
    transition: 1000ms;
    z-index: 1;
    position: relative;
    opacity: 0 ;
    top: 80px;
    padding-right: 80px;
    font-family:  'Roboto Mono', monospace;
    font-size: 5.5rem;
    /* transition: transform 0.3s ease-in-out; */
}
.titleWrap {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row-reverse;
    width: -webkit-fill-available;
    height: 6.5rem;

}
.titleBackground {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,17,145,1) 35%, rgba(0,126,150,1) 100%);

    /* background-color: #000000; */
    margin: -80px -40px;
    height: 50px;
    position: absolute;
    z-index: 0;
    transition: 1000ms;
    width: 100%;
}
.titleBackground.second {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(17,17,145,1) 35%, rgba(0,126,150,1) 100%);
    /* background-color: #000000; */
    margin: -40px -40px;
    height: 50px;
    position: absolute;
    z-index: 0;
    transition: 1000ms;
    width: 100%;
}
</style>