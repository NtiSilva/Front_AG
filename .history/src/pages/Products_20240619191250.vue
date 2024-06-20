<template>
  <v-container class="fill-height">

      <v-container>
        <h1 class="mb-6 text-brand">Lista de projetos</h1>

        <v-card flat class="border mb-4">
          <div class="d-flex justify-space-between">
            <v-card-title>Projetos</v-card-title>
            <created-client></created-client>
          </div>
          <template v-slot:text>
            <v-text-field
              v-model="search"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              variant="outlined"
              hide-details
              single-line
            ></v-text-field>
          </template>

          <v-data-table
            :headers="headers"
            :items="products"
            :search="search"
          >

        </v-data-table>
        </v-card>
      </v-container>

  </v-container>
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
    ...mapActions('productsModule',['fetchProducts', 'testeAction'])
  },
  mounted() {
    console.log('saiu')
    console.log('this', this.$store)
    this.testeAction();
    this.fetchProducts();
  }
};
</script>
