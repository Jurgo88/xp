<template>
    <div>
      <label for="command">Command {{ command }} [%]:</label>
      <input id="ranger" type="range" v-model="command" @input="updateCurrent" @mousedown="setOldVariabiles" @mouseup="dropRanger()" min="0" max="100" />
  
      <label for="ramp">Čas změny [s]:</label>
      <input type="number" v-model="ramp" @input="updateCurrent" min="0" />
  
      <p v-if="!isLoading">Výstup: {{ outCurrent.toFixed(2) }} mA</p>
      <p v-if="isLoading" class="counting">
        Loading...<br>
        rampTime: {{ rampTime.toFixed(2) }}s
        </p>
    </div>
  </template>
  
  <script setup>
    import { ref, watch } from 'vue';
    
    const command = ref(0);
    const ramp = ref(10);
    const outCurrent = ref(4);
    const oldCommand = ref(0);
    const rampTime = ref(0);
    const isLoading = ref(false);
  
    const updateCurrent = () => {
        isLoading.value = true;
        if (command.value > 100) {
        command.value = 100;
        }
        if (command.value < 0) {
        command.value = 0;
        }

        const targetCurrent = 4 + (20 - 4) * (command.value / 100);
        // const rampTime = (ramp.value ) * (command.value / 100);



        console.log('targetCurrent', targetCurrent);

        outCurrent.value = targetCurrent;

    };

    const dropRanger = () => {
        console.log('drop the ranger');
        console.log('oldCommand', oldCommand.value);
        console.log('command', command.value);
        calculateRampTime();
        updateCurrent();
    };

    const setOldVariabiles = () => {
        console.log('set old variabiles');
        oldCommand.value = command.value;


    };

    const calculateRampTime = () => {
        // console.log('calculateRampTime');
        let difference = Math.abs(command.value - oldCommand.value);
        console.log('rozdiel', difference + '%');
        rampTime.value= (ramp.value ) * (difference / 100);
        console.log('rampTime', rampTime.value + 's');
        setTimeout(() => {
            isLoading.value = false;
        }, rampTime.value * 1000);
        for(let i = 0; i < rampTime.value * 10; i++) {
            console.log('i', i);
            // this.$el.counting.innerHTML = 'Loading...<br>';
        }

    };
    
    watch([command, ramp], () => {
    // updateCurrent();
    });
</script>
```
<style>
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
label {
  display: block;
  margin-top: 10px;
}
</style>
  
