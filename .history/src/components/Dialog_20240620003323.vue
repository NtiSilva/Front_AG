<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="showDialog"
      max-width="400"
      persistent
    >
      <!-- <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps">
          Open Dialog
        </v-btn>
      </template> -->

      <v-card
        class="bg-deep-purple"
        theme="dark"
        prepend-icon="mdi-map-marker"
      >
       <template v-slot:body>texto aqui</template>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="showDialog = false">
            Disagree
          </v-btn>

          <v-btn @click="showDialog = false">
            Agree
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  const showDialog = defineModel({default: false})
</script>
