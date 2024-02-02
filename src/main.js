import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import BootstrapVue and its styles
// import BootstrapVue from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';


// eslint-disable-next-line import/no-unresolved,n/no-missing-import
import VuePlyr from '@skjnldsv/vue-plyr'
// eslint-disable-next-line import/no-unresolved,n/no-missing-import
// import '@skjnldsv/vue-plyr/dist/vue-plyr.css'

// import VuePlyr from './VuePlyr.vue'

VuePlyr.install = (app, options = {}) => {
	if (options.plyr) {
		VuePlyr.props.options.default = () => {
			return { ...options.plyr }
		}
	}

	app.component(VuePlyr.name, VuePlyr)
}

const app = createApp(App);

// Use BootstrapVue
// app.use(BootstrapVue);

// Use router and store and plyr
app.use(router).use(store).use(VuePlyr);

// Call mount on the element with id "app"
app.mount("#app");
