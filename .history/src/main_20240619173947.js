import { createApp } from "vue";
import { createStore } from "vuex";

import { registerPlugins } from "@/plugins";
import "./plugins/axios";

import App from "./App.vue";

const app = createApp(App);

app.use(createStore());

registerPlugins(app);

app.mount("#app");
