import { createApp } from "vue";
import { createStore } from "vuex"; // Importe o Vuex corretamente

// Importe os plugins e outros recursos conforme necessário
import { registerPlugins } from "@/plugins";
import "./plugins/axios";

// Importe o componente principal da sua aplicação
import App from "./App.vue";

const app = createApp(App);

// Use o Vuex na instância do aplicativo
app.use(createStore()); // Aqui você precisa passar uma instância do Vuex criada com createStore()

// Registre os plugins
registerPlugins(app);

// Monte a aplicação
app.mount("#app");
