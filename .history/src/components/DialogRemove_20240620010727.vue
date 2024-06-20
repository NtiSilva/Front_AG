<template>
  <Dialog v-model="showDialog" :title="'Excluir projeto'">
    <div> Texto </div>
  </Dialog>

</template>

<script setup>
  import Dialog from './Dialog.vue'
    components: { Dialog }
    name: 'DialogRemove'

    const showDialog = defineModel({default: false})

</script>
