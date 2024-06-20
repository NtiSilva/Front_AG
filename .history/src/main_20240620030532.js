import { createApp } from "vue";

import { registerPlugins } from "@/plugins";
import "./plugins/axios";

import App from "./App.vue";
import store from "./store";

import VueMoment from "vue-moment";
import moment from "moment-timezone";

const app = createApp(App).use(store).use(VueMoment, {
  moment,
});

registerPlugins(app);

app.mount("#app");
