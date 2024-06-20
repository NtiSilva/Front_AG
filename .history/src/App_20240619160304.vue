<template>
  <v-app>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          class="bg-deep-purple"
          permanent
        >
          <v-list color="transparent">
            <v-list-item
              prepend-icon="mdi-view-dashboard"
              title="Dashboard"
              @click="navigateTo('/')">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-account-box"
              title="Usuários"
              @click="navigateTo('/users')">
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-gavel"
              title="Atividades"
              @click="navigateTo('/activities')">
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main>
          <router-view />
        </v-main>
      </v-layout>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
