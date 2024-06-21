<template>
  <Dialog v-model="showEdit" :title="'Editar projeto'">

    <template v-slot:body>
      <form @submit.prevent="submit" class="pa-md-4 mx-lg-auto">
        <v-text-field
          v-model="product_name.value"
          :counter="60"
          :error-messages="product_name.errorMessage.value"
          label="Nome do projeto"
          color="deep-purple"
          variant="outlined"
        ></v-text-field>

        <v-textarea
          v-model="product_description.value"
          :counter="255"
          color="deep-purple"
          label="Descrição"
          variant="outlined"
        ></v-textarea>

        <v-select
          v-model="select.value"
          :error-messages="select.errorMessage.value"
          :items="clients"
          item-title="name"
          item-value="id"
          label="Responsável"
          variant="outlined"
          return-object
        ></v-select>
        <v-date-input
          v-model="dtInit.value"
          label="Data do ínicio do projeto"
          prepend-icon=""
          variant="outlined"
          persistent-placeholder
        ></v-date-input>

        <v-date-input
          v-model="dtEnd.value"
          label="Data prevista do final do projeto"
          prepend-icon=""
          variant="outlined"
          persistent-placeholder
        ></v-date-input>


        <v-col class="p-0 "
            cols="12"
          >
            <p>Status</p>

            <v-btn-toggle
              v-model="status.value"
              color="deep-purple-accent-3"
              rounded="0"
              group
            >
              <v-btn value="Aberto" color="blue-darken-4">
                <div class="blue-darken-4">
                  ABERTO
                </div>
              </v-btn>

              <v-btn value="Em andamento">
                EM ANDAMENTO
              </v-btn>

              <v-btn value="Fechado">
                FECHADO
              </v-btn>
            </v-btn-toggle>
          </v-col>

          <v-btn type="submit">Submit</v-btn>
      </form>
    </template>

    <template v-slot:buttons>
    </template>

  </Dialog>
</template>

<script setup>
  import { ref, onMounted, computed, watchEffect, toRaw, defineProps } from 'vue';
  import { useField, useForm } from 'vee-validate'
  import * as yup from 'yup';
  import { useStore } from 'vuex';
  import Dialog from './Dialog.vue'

  const props = defineProps({
    product: {
      type: Object,
      required: true,
      default: () => ({
        project_name: "",
        project_description: "",
        status: "",
        client: {},
        dt_init: "",
        dt_end: null,
        projectId: null
      })
    }
  });

  const store = useStore();
  const showEdit = ref(false);

  const schema = yup.object({
    product_name: yup.string().required('Nome não pode ter menos que 2 letras.').min(2, 'Nome não pode ter menos que 2 letras.'),
    select: yup.object().required('Selecione um responsável').nullable(),
    dtInit: yup.date().required('Selecione a data de início do projeto'),
    dtEnd: yup.date().required('Selecione a data prevista do final do projeto'),
    status: yup.string().required('Selecione o status do projeto')
  });

  const product_name = useField('product_name', props.product.project_name);
  const product_description = useField('product_description', props.product.project_description);
  const dtInit = useField('dt_init', props.product.dt_init);
  const dtEnd = useField('dt_end', props.product.dt_end);
  const select = useField('select', props.product.client);
  const status = useField('status', props.product.status);

  const mappedClients = computed(() => store.state.clientsModule.clients);
  const clients = ref([]);

  watchEffect(() => {
    clients.value = toRaw(mappedClients.value);
  });

  const closeModal = () => {
    showEdit.value = false;
  };

  const submit = useForm(() => {
    console.log('Form submitted');
    closeModal();
  });

  const fetchClients = () => store.dispatch('clientsModule/fetchClients');

  onMounted(() => {
    fetchClients();
  });
</script>
