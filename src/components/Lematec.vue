<template>
    <div>
      <label for="command">Příkaz [%]:</label>
      <input type="number" v-model="command" @input="updateCurrent" min="0" max="100" />
  
      <label for="ramp">Čas změny [s]:</label>
      <input type="number" v-model="ramp" @input="updateCurrent" min="0" />
  
      <p>Výstup: {{ outCurrent.toFixed(2) }} mA</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const command = ref(0);
  const ramp = ref(3);
  const outCurrent = ref(4);
  
  const updateCurrent = () => {
  const targetCurrent = 4 + (20 - 4) * (command.value / 100);
  const stepChange = (targetCurrent - outCurrent.value) / (ramp.value * 10);

  // Rampa - postupné zvyšování/snižování proudu
  for (let i = 0; i < ramp.value * 10; i++) {
    outCurrent.value += stepChange;
    // Zde by měl být kód pro ovládání hydraulického ventilu s aktuálním proudu
    // Můžeš například posílat aktuální hodnotu outCurrent.value na hydraulický ventil.
    // ...
  }
};
  
  watch([command, ramp], () => {
    updateCurrent();
  });
  </script>
  
