<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Desktop />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Desktop from "@/components/Desktop.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    Desktop,
  },
};
</script>
