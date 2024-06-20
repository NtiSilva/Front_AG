<template>
  <Dialog v-model="showDialogRemove" :title="'Excluir projeto'">
    <v-card>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-text>Tem certeza que quer excluir esse registro?</v-card-text>
      </v-card>
  </Dialog>

</template>

<script setup>
  import Dialog from './Dialog.vue'
    components: { Dialog }
    name: 'DialogRemove'

    const showDialogRemove = defineModel({default: false})

</script>
