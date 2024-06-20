<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="showDialog"
      max-width="400"
      persistent
    >
      <v-card
      >
      <v-toolbar title="Opening from the Bottom" class="bg-deep-purple"></v-toolbar>
       <slot></slot>

       <v-divider ></v-divider>
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
