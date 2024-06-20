<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        class="bg-deep-purple"
        theme="dark"
        permanent
      >
        <v-list color="transparent">
          <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" @click=""></v-list-item>
          <v-list-item prepend-icon="mdi-account-box" title="Usuários"></v-list-item>
          <v-list-item prepend-icon="mdi-gavel" title="Atividades"></v-list-item>
        </v-list>

        <!-- <template v-slot:append>
          <div class="pa-2">
            <v-btn block>
              Logout
            </v-btn>
          </div>
        </template> -->
      </v-navigation-drawer>
      <v-main > <router-view /></v-main>
    </v-layout>
  </v-card>


</template>

<script setup>
  //
</script>
