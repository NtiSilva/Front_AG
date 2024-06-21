<template>
  <v-container class="m-3" fill-height>
    <v-btn
      class="py-1 mb-2 d-flex"
      color="deep-purple-lighten-1"
      @click="navigateTo"
    >
      Cadastrar novo
    </v-btn>
    <v-card>
      <v-layout>
        <v-app-bar
          class="bg-deep-purple-lighten-1"
          title="Clientes cadastrados"
          flat
        >
          <template v-slot:prepend></template>
        </v-app-bar>
        <v-data-table
          :headers="headers"
          :items="clients"
          v-model:search="search"
          class="pt-16 mt-5"
        >
          <template v-slot:item.config="{ item }">
            <div class="d-flex justify-center">
              <v-icon
                class="me-2"
                size="small"
                @click="editClient(item)"
                icon="mdi-pencil"
              />

              <v-icon
                size="small"
                @click="deleteItem(item)"
                icon="mdi-delete"
              />
            </div>
          </template>
        </v-data-table>
        <dialog-remove
          v-model="showDialogRemove"
          @confirm="deleteClient()"
        ></dialog-remove>
      </v-layout>
    </v-card>
    <alert
      v-model="showAlert"
      @messageAlert="messageAlert.value"
      @typeAlert="typeAlert"
    ></alert>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect, toRaw } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import DialogRemove from "@/components/DialogRemove.vue";
import Alert from "@/components/Alert.vue";

const store = useStore();
const router = useRouter();

const headers = [
  { align: "start", key: "name", sortable: false, title: "Cliente" },
  { key: "email", title: "E-email" },
  { key: "phone", title: "Telefone" },
  { key: "address", title: "Endereço" },
  { key: "company", title: "Empresa" },
  { key: "config", title: "" },
];

const clients = ref([]);
const selectItem = ref();
const showDialogRemove = ref(false);
const showAlert = ref(false);

const mappedClients = computed(() => store.state.clientsModule.clients);

watchEffect(() => {
  clients.value = mappedClients.value;
  clients.value = toRaw(clients.value);
});

const messageAlert = ref("");
const typeAlert = ref("success");

const deleteClient = async () => {
  try {
    const response = await store.dispatch(
      "clientsModule/removeClient",
      selectItem.value
    );
    messageAlert.value = "Usuário excluido!";
    typeAlert.value = "success";
    showAlert.value = true;
  } catch (error) {
    messageAlert.value =
      "Não foi possível excluir o projeto. Provável relação com atividades não finalizadas";
    typeAlert.value = "error";
    showAlert.value = true;
  }
};

const client = ref({});

const editClient = (item) => {
  client.value = toRaw(item);
};

const handleConfirm = () => {
  console.log("Edição confirmada");
};

const deleteItem = (item) => {
  showDialogRemove.value = true;
  selectItem.value = item.id;
};

const fetchClients = () => store.dispatch("clientsModule/fetchClients");

function navigateTo() {
  router.push({ name: "Clients" });
}

onMounted(() => {
  fetchClients();
});
</script>
