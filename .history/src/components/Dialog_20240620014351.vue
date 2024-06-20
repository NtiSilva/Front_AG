<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="showDialog"
      max-width="400"
      persistent
    >
      <v-card
      >
      <v-toolbar class="bg-deep-purple">{{ title }}</v-toolbar>
      <div>
        <slot></slot>
      </div>

       <v-divider></v-divider>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="buttonClick">
            Confirma
          </v-btn>

          <v-btn @click="showDialog = false">
            Cancela
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  const showDialog = defineModel({default: false})
  const emit = defineEmits(['confirm'])

  defineProps({
    title: String
  })

  const confirm = () => {
    emit('confirm');
    closeModal();
  };

  const closeModal = () => {
    emit('update:modalActive', false);
  };
</script>
