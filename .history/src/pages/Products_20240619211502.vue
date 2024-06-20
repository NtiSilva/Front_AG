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
      <v-icon
        class="me-2"
        size="small"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        size="small"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  </v-card>
  </v-container>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';

export default {
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

    // Mapeia o estado do Vuex
    const mappedProducts = computed(() => store.state.productsModule.products);

    const getColor = (status) => {
      if (status === 'Fechado') return 'red';
      else if (status === 'Em andamento') return 'orange';
      else return 'green';
    };

    const deleteItem = (item) =>{
      // Acessar as propriedades do item
      console.log('Deleting item with projectId:', item.projectId);

      // Para acessar todas as propriedades e visualizar o conteúdo
      console.log('Item details:', { ...item });

      // Execute a ação de exclusão
      store.dispatch('productsModule/removeProduct', item.projectId);

    }

    // Ações do Vuex
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
