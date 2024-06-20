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
import { mapState, mapActions } from 'vuex';

export default {
  name: "DashProducts",
  data() {
    return {
      headers: [
      {
        align: 'start',
        key: 'project_name',
        sortable: false,
        title: 'Nome do Projeto',
      },
      { key: 'project_description', title: 'Descrição' },
      { key: 'dt_init', title: 'Data de Inicio' },
      { key: 'dt_end', title: 'Data Do término(previsão)' },
      { key: 'client.name', title: 'Responsável' },
      { key: 'status', title: 'Status' },
      { key: 'config', title: ''},

    ]

    }
  },
  computed: {
    ...mapState('productsModule',['products'])
  },
  methods: {
    ...mapActions('productsModule',['fetchProducts', 'testeAction']),
    getColor (status) {
        if (status > 'Fechado') return 'red'
        else if (calories > 'Em andamento') return 'orange'
        else return 'Aberto'
      },
  },
  mounted() {
    console.log('saiu')
    console.log('this', this.$store)
    this.testeAction();
    this.fetchProducts();
  }
};
</script>
