<template>
  <Dialog v-model="showEdit" :title="'Editar projeto'">
    <div> Texto </div>
  </Dialog>

</template>

<script setup>
  import Dialog from './Dialog.vue'
    components: { Dialog }
    name: 'DialogEdit'

    const showEdit = defineModel({default: false})

</script>
