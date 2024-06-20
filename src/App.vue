<template>
  <v-app>
    <v-navigation-drawer
      class="bg-deep-purple"
      theme="dark"
      permanent
    >
      <v-list color="transparent">
        <v-list-item prepend-icon="mdi-view-dashboard" title="Produtos" @click="navigateTo('/products')"></v-list-item>
        <v-list-item prepend-icon="mdi-account-box" title="Clientes" @click="navigateTo('/clients')"></v-list-item>
        <v-list-item prepend-icon="mdi-gavel" title="Atividades" @click="navigateTo('/activies')"></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout">
            Logout
          </v-btn>
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
  name: 'App',
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    logout() {
      // lógica para logout
    },
  },
};
</script>

<style>
html, body, #app {
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
