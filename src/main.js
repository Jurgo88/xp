import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import BootstrapVue and its styles
// import BootstrapVue from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';




const app = createApp(App);

// Use BootstrapVue
// app.use(BootstrapVue);

// Use router and store
app.use(router).use(store);

// Call mount on the element with id "app"
app.mount("#app");
