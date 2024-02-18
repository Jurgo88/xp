<template>
    <div>
      <label for="command">Command {{ command }} [%]:</label>
      <input id="ranger" type="range" v-model="command" @input="updateCurrent" @mousedown="setOldVariabiles" @mouseup="dropRanger()" min="0" max="100" />
  
      <label for="ramp">Čas změny [s]:</label>
      <input type="number" v-model="ramp" @input="updateCurrent" min="0" />
  
      <p v-if="!isLoading">Výstup: {{ outCurrent.toFixed(2) }} mA</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const command = ref(0);
  const ramp = ref(3);
  const outCurrent = ref(4);
  const oldCommand = ref(0);
  const rampTime = ref(0);
    const isLoading = ref(false);
  
  const updateCurrent = () => {

    if (command.value > 100) {
      command.value = 100;
    }
    if (command.value < 0) {
      command.value = 0;
    }

    const targetCurrent = 4 + (20 - 4) * (command.value / 100);
    // const rampTime = (ramp.value ) * (command.value / 100);

    // console.log('command', command.value);

    // console.log('ramnpTime', rampTime + 's');


    // const myInterval = setInterval(() => {
    //   outCurrent.value = targetCurrent;
    //   console.log('outCurrent', outCurrent.value);
    // }, rampTime * 1000);

    // setTimeout(() => {
    //   outCurrent.value = targetCurrent;
    // //   console.log('outCurrent', outCurrent.value);
    // }, rampTime * 1000);


    // // Výpočet kroku změny proudu
    // for(let i = 0; i <= rampTime*1000; i++) {
    //     // console.log('i', i);
    //     // outCurrent.value =targetCurrent;
       
            
    // }
    

    // for (let i = 0; i <= command.value; i++) {
    // //   console.log('outCurrent', i);
    //   setTimeout(() => {
    //     console.log('myI', i);
    //     outCurrent.value = 4 + (20 - 4) * (i / 100);
    //   }, ramnpTime * 1000);
      
    // }


    console.log('targetCurrent', targetCurrent);

    // Výpočet kroku změny proudu

    outCurrent.value = targetCurrent;

    // Rampa - postupné zvyšování/snižování proudu
    // for (let i = 0; i < ramp.value * 10; i++) {
    //     outCurrent.value += stepChange;
    //     // console.log('outCurrent', outCurrent.value);
    // }
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
    console.log('calculateRampTime');
    let difference = Math.abs(command.value - oldCommand.value);
    console.log('rozdiel', difference + '%');
    rampTime .value= (ramp.value ) * (difference / 100);
    console.log('rampTime', rampTime.value + 's');

};
  
watch([command, ramp], () => {
// updateCurrent();
});
</script>
  
