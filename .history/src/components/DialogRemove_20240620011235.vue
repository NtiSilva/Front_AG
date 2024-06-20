<template>
  <Dialog v-model="showDialogRemove" :title="'Excluir projeto'">
    <div> Texto </div>
  </Dialog>

</template>

<script setup>
  import Dialog from './Dialog.vue'
    components: { Dialog }
    name: 'DialogRemove'

    const showDialogRemove = defineModel({default: false})

</script>
