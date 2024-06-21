<template>
  <form @submit.prevent="submit">
    <v-container class="m-3">
      <v-btn
        class="ms-2 py-1 mb-2 d-flex"
        color="deep-purple-lighten-1"
        @click="navigateTo"
        disabled
      >
        Ver todas
      </v-btn>
      <v-card>
        <v-layout class="bg-purple-lighten-5">
          <v-system-bar class="bg-deep-purple"> </v-system-bar>
          <v-app-bar
            class="bg-deep-purple-lighten-1"
            title="Cadastrar nova atividade"
            flat
          >
            <template v-slot:prepend></template>
          </v-app-bar>
          <v-main>
            <v-container class="pt-8 bg-deep-purple-lighten-5">
              <slot name="body"></slot>
              <v-text-field
                v-model="name.value.value"
                :counter="60"
                :error-messages="name.errorMessage.value"
                label="Nome da atividade"
                color="deep-purple"
                variant="outlined"
              ></v-text-field>

              <v-textarea
                v-model="description.value.value"
                :counter="255"
                color="deep-purple"
                label="Descrição"
                variant="outlined"
              ></v-textarea>

              <v-select
                v-model="projectId.value.value"
                :items="projects"
                item-title="project_name"
                item-value="id"
                label="Projeto"
                variant="outlined"
                return-object
              ></v-select>
              <v-date-input
                v-model="dt_init.value.value"
                label="Data do ínicio do projeto"
                prepend-icon=""
                variant="outlined"
                persistent-placeholder
              ></v-date-input>

              <v-date-input
                v-model="dt_end.value.value"
                label="Data prevista do final do projeto"
                prepend-icon=""
                variant="outlined"
                persistent-placeholder
              ></v-date-input>

              <v-col class="p-0" cols="12">
                <p>Status</p>
                <v-btn-toggle
                  v-model="status.value.value"
                  color="deep-purple-accent-3"
                  rounded="0"
                  group
                >
                  <v-btn value="Aberto" color="blue-darken-4">
                    <div class="blue-darken-4">ABERTO</div>
                  </v-btn>

                  <v-btn value="Em andamento"> EM ANDAMENTO </v-btn>

                  <v-btn value="Fechado"> FECHADO </v-btn>
                </v-btn-toggle>
              </v-col>
              <v-col class="p-0" cols="12">
                <p>Prioridade</p>
                <v-btn-toggle
                  v-model="prioridade.value.value"
                  color="deep-purple-accent-3"
                  rounded="0"
                  group
                >
                  <v-btn value="Alta" color="blue-darken-4">
                    <div class="blue-darken-4">ALTA</div>
                  </v-btn>

                  <v-btn value="Media"> MÉDIA </v-btn>

                  <v-btn value="Baixa"> BAIXA </v-btn>
                </v-btn-toggle>
              </v-col>
            </v-container>
          </v-main>
        </v-layout>

        <template v-slot:actions>
          <v-btn color="#4603c0" :disabled="isSubmitting" type="submit"
            >Salvar</v-btn
          >
          <v-btn color="#4603c0" @click="handleReset">Limpar</v-btn>
        </template>
      </v-card>
    </v-container>
  </form>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect, toRaw, defineProps } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";

const store = useStore();
const router = useRouter();

const { handleSubmit, handleReset, isSubmitting } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;
      return "Nome precisa ter mais que 2 caracteres.";
    },
  },
});

const name = useField("name");
const description = useField("description");
const dt_init = useField("dt_init");
const dt_end = useField("dt_end");
const status = useField("status");
const prioridade = useField("prioridade");
const projectId = useField("projectId");

const formatData = (activities) => {
  return activities.value?.map((activity) => {
    return {
      ...activity,
      projectId: activity.project.projectId,
      project: undefined,
    };
  });
};

const submit = handleSubmit(async (values) => {
  try {
    const formattedValues = formatData(values);
    await store.dispatch("activitiesModule/addActivity", formattedValues);
    alert("Projeto adicionado com sucesso");
    handleReset();
    navigateTo();
  } catch (error) {
    alert("Não foi possivel adicionar projeto, tente mais tarde.");
    console.error("Erro ao adicionar projeto", error);
  }
});

function navigateTo() {
  router.push({ name: "ListProducts" });
}

const mappedProjects = computed(() => store.state.productsModule.products);
const projects = ref([]);

watchEffect(() => {
  projects.value = toRaw(mappedProjects.value);
});

const fetchProjects = () => store.dispatch("productsModule/fetchProducts");

onMounted(() => {
  fetchProjects();
});
</script>
