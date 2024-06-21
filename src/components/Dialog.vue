<template>
  <div class="text-center">
    <v-dialog
      v-model="showDialog"
      max-width="400"
    >
      <v-card  flat>
        <v-toolbar class="bg-deep-purple text-h6 text-center ps-5">{{ title }}</v-toolbar>
        <div>
          <slot name="body"></slot>
        </div>

        <v-divider flat></v-divider>
          <template v-slot:actions>
            <v-spacer></v-spacer>

            <slot name="buttons"></slot>
            <v-btn @click="showDialog = false">
              Cancelar
            </v-btn>
          </template>
        </v-card>
     </v-dialog>
   </div>
</template>

<script setup>
  const showDialog = defineModel({default: false})

  defineProps({
    title: String
  })

  const closeModal = () => {
    showDialog.value = false
  };
</script>
