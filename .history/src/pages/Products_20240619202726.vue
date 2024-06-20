<template>
  <v-data-table
    :headers="headers"
    :items="products"
  >
    <template v-slot:item.status="{ value }">
      <v-chip :color="getColor(value)">
        {{ value }}
      </v-chip>
    </template>
  </v-data-table>
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
      console.log('status');
      // if (status === 'Fechado') return 'red'
      // else if (status === 'Em andamento') return 'orange'
      // else return 'Aberto'
    };

    // Ações do Vuex
    const fetchProducts = () => store.dispatch('productsModule/fetchProducts');
    const testeAction = () => store.dispatch('productsModule/testeAction');

    onMounted(() => {
      console.log('saiu');
      console.log('this', store);
      testeAction();
      fetchProducts();
    });

    return {
      headers,
      products: mappedProducts,
      getColor,
      fetchProducts,
      testeAction,
    };
  }
};
</script>
