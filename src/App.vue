<template>
  <v-app>
    <v-navigation-drawer class="bg-deep-purple" permanent>
      <v-list>
        <v-list-header class="d-flex justify-center pb-4 text-uppercase"
          >Gestão de projetos</v-list-header
        >
        <v-list-group value="projects">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account"
              title="Projetos"
            ></v-list-item>
          </template>
          <v-list-item @click="navigateTo('/products/list-products')"
            >Visualizar</v-list-item
          >
          <v-list-item @click="navigateTo('/products/form-product')"
            >Cadastrar Projetos</v-list-item
          >
          <v-list-item @click="navigateTo('/activities/form-activities')"
            >Cadastrar atividades</v-list-item
          >
        </v-list-group>

        <v-list-group value="clients">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account"
              title="Clientes"
            ></v-list-item>
          </template>
          <v-list-item @click="navigateTo('/clients/form-client')"
            >Cadastrar</v-list-item
          >
          <v-list-item @click="navigateTo('/clients/list-clients')"
            >Visualizar</v-list-item
          >
        </v-list-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout"> Sair </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main class="main-content">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    clients: [
      ["Cadastrar", "mdi-account-multiple-outline"],
      ["Visualiza todos", "mdi-cog-outline"],
    ],
    projetos: [
      ["Cadastrar", "mdi-account-multiple-outline"],
      ["Visualiza todos", "mdi-cog-outline"],
      ["Cadastrar atividades", "mdi-cog-outline"],
    ],
  }),
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.v-application {
  height: 100%;
}

.v-main {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f5f5f5;
}

.v-navigation-drawer {
  height: 100%;
}
</style>
