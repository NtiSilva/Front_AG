<template>
  <v-container
    class="d-flex align-center justify-center"
    fill-height
  >
  <v-card
    flat
    class="mx-auto"
    prepend-icon="$vuetify"
    subtitle="The #1 Vue UI Library"
  >
  <v-data-table
    :headers="headers"
    :items="products"
    v-model:search="search"
  >
    <template v-slot:item.status="{ value }">
      <div class="text-end">
        <v-chip
          :color="getColor(value)"
          class="text-uppercase"
          size="small">
            {{ value }}
        </v-chip>
      </div>

    </template>

    <template v-slot:item.config="{ item }">
      <div class="d-flex justify-center">
        <v-icon
          class="me-2"
          size="small"
          @click="editItem(item)"
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

  <Dialog />

</v-card>
  </v-container>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import Dialog from '@/components/Dialog.vue';
// import RemoveModal from '@/components/RemoveModal';

export default
{
  name: "DashProducts",
  setup() {
    const store = useStore();

    const headers = [
      { align: 'start', key: 'project_name', sortable: false, title: 'Nome do Projeto' },
      { key: 'project_description', title: 'Descrição' },
      { key: 'dt_init', title: 'Data de Inicio' },
      { key: 'dt_end', title: 'Data Do término(previsão)' },
      { key: 'client.name', title: 'Responsável' },
      { key: 'status', title: 'Status' },
      { key: 'config', title: '' },
    ];

    const products = ref([]);
    const selectItem = ref()
    // const showModalRemove = ref(false)

    const mappedProducts = computed(() => store.state.productsModule.products);

    const getColor = (status) => {
      if (status === 'Fechado') return 'red';
      else if (status === 'Em andamento') return 'orange';
      else return 'green';
    };

    const deleteProject = () => {
      console.log('voltou', selectItem.value)
      // store.dispatch('productsModule/removeProduct', selectItem.value);
    }

    const deleteItem = (item) =>{
      // showRemoveModal.value = true
      // showModalRemove = true
      console.log('chegou')
      // selectItem.value = item.projectId
    }

    const fetchProducts = () => store.dispatch('productsModule/fetchProducts');

    onMounted(() => {
      fetchProducts();
    });

    return {
      headers,
      products: mappedProducts,
      getColor,
      fetchProducts,
      deleteItem
    };
  }
};
</script>
