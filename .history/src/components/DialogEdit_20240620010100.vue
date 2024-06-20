<template>
  <Dialog v-model="showEdit">
    <div> Texto </div>
  </Dialog>

</template>

<script setup>
  import Dialog from './Dialog.vue'
    components: { Dialog }
    name: 'DialogEdit'

    const showEdit = defineModel({default: false})

</script>
