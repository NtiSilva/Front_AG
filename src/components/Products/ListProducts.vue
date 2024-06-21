<template>
  <v-container class="m-3" fill-height>
    <div class="d-flex">
      <v-btn
        class="py-1 mb-2 d-flex"
        color="deep-purple-lighten-1"
        @click="statusProduct"
      >
        Cadastrar novo
      </v-btn>
    </div>

    <v-card flat class="mx-auto">
      <v-layout class="d-flex">
        <v-app-bar
          class="bg-deep-purple-lighten-1"
          title="Projetos cadastrados"
          flat
        >
          <template v-slot:prepend></template>
        </v-app-bar>

        <v-expansion-panels class="mt-16">
          <v-expansion-panel
            v-model="panel"
            :readonly="readonly"
            multiple
            v-for="product in products"
            :key="product.id"
          >
            <v-expansion-panel-title>
              {{ formatData(product.project_name) }}
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-card flat>
                <v-card-title>
                  Empresa: {{ formatData(product.client?.company) }}
                </v-card-title>
                <v-card-text>
                  <p>
                    Descrição do projeto:
                    {{ formatData(product.project_description) }}
                  </p>
                  <p>Data de inicío: {{ formatData(product.dt_init) }}</p>
                  <p>Data final/previsão: {{ formatData(product.dt_end) }}</p>
                  <p>Responsável: {{ formatData(product.client?.name) }}</p>
                  <p>
                    Status:
                    <v-chip
                      :color="getColor(value)"
                      class="text-uppercase"
                      size="small"
                    >
                      {{ product.status }}</v-chip
                    >
                  </p>
                  <p>Atividades:</p>
                  <v-data-table
                    :headers="headers"
                    :items="taskProducts(product.projectId)"
                    v-model:search="search"
                    class="pt-16 mt-5"
                  />
                </v-card-text>

                <v-card-actions>
                  <v-icon
                    class="me-2"
                    size="small"
                    @click="editProject(item)"
                    icon="mdi-pencil"
                  />

                  <v-icon
                    size="small"
                    @click="deleteItem(item)"
                    icon="mdi-delete"
                  />
                </v-card-actions>
              </v-card>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-layout>
    </v-card>
    <dialog-remove
      v-model="showDialogRemove"
      @confirm="deleteProject()"
    ></dialog-remove>
    <dialog-edit
      v-model="showEdit"
      :product="toRaw(product.value)"
    ></dialog-edit>
    <alert
      v-model="showAlert"
      @messageAlert="messageAlert"
      @typeAlert="typeAlert"
    ></alert>
  </v-container>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect, toRaw } from "vue";
import { useStore } from "vuex";
import DialogRemove from "@/components/DialogRemove.vue";
import DialogEdit from "@/components/DialogEdit.vue";
import Alert from "@/components/Alert.vue";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const panel = ref([0, 1]);
const readonly = ref(false);

const headers = [
  {
    align: "start",
    key: "name",
    sortable: false,
    title: "Atividade",
  },
  { key: "description", title: "Descrição" },
  { key: "dt_init", title: "Data de Inicio" },
  { key: "dt_end", title: "Data Do término(previsão)" },
  { key: "prioridade", title: "Prioridade" },
  { key: "status", title: "Status" },
];

const products = ref([]);
const activities = ref([]);
const selectItem = ref();
const showDialogRemove = ref(false);
const showEdit = ref(false);
const showAlert = ref(false);

const mappedProducts = computed(() => store.state.productsModule.products);
const mappedActivities = computed(
  () => store.state.activitiesModule.activities
);

watchEffect(() => {
  products.value = mappedProducts.value;
  products.value = toRaw(products.value);
  activities.value = mappedActivities.value;
  activities.value = toRaw(activities.value);
});

const listActivities = ref([]);

const taskProducts = (value) => {
  const foundTask = activities.value.filter(
    (act) => act.project?.projectId === value
  );
  if (foundTask.length > 0) {
    console.log(foundTask);
    return foundTask;
  }
};

const getColor = (status) => {
  if (status === "Fechado") return "red";
  else if (status === "Em andamento") return "orange";
  else return "green";
};

const formatDate = (date) => {
  // console.log(date)

  return date;
  //  moment(date, "YYYY-MM-DD").format("YYYY-MM-DD");
};

const messageAlert = ref("");
const typeAlert = ref("success");

const apoio = ref("Valor padrão");

const formatData = (value, defaultValue = apoio.value) => {
  if (!value) {
    return defaultValue;
  }
  return value;
};

const deleteProject = async () => {
  try {
    const response = await store.dispatch(
      "productsModule/removeProduct",
      selectItem.value
    );
    if (response) {
      messageAlert.value = response.data.message;
      typeAlert.value = "success";
      showAlert.value = true;
    }
  } catch (error) {
    messageAlert.value =
      "Não foi possível excluir o projeto. Provável relação com atividades não finalizadas";
    typeAlert.value = "error";
    showAlert.value = true;
  }
};

const product = ref({});

const editProject = (item) => {
  product.value = toRaw(item);
  store.commit("productsModule/SET_PRODUCT", toRaw(product.value));
  navigateTo("FormProduct");
};

const handleConfirm = () => {
  console.log("Edição confirmada");
};

const deleteItem = (item) => {
  showDialogRemove.value = true;
  selectItem.value = item.projectId;
};

const fetchProducts = () => store.dispatch("productsModule/fetchProducts");
const fetchActivities = () =>
  store.dispatch("activitiesModule/fetchActivities");

const statusProduct = () => {
  store.commit("productsModule/SET_PRODUCT", {});
  navigateTo("FormProduct");
};

function navigateTo(route) {
  router.push({ name: route });
}

onMounted(() => {
  fetchProducts();
  fetchActivities();
});
</script>
