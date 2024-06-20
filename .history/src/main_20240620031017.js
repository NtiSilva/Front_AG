import { createApp } from "vue";

import { registerPlugins } from "@/plugins";
import "./plugins/axios";

import App from "./App.vue";
import store from "./store";

import VueMoment from "vue-moment";
import moment from "moment";

const app = createApp(App).use(store);
app.config.globalProperties.$moment = moment;

registerPlugins(app);

app.mount("#app");
