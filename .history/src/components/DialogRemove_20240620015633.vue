<template>
  <Dialog v-model="showDialogRemove" :title="'Excluir projeto'">
    <p class="text-body-2 ps-6">
      Tem certeza que quer excluir esse registro?
    </p>
  </Dialog>

</template>

<script setup>
  import Dialog from './Dialog.vue'
    components: { Dialog }
    name: 'DialogRemove'

    const showDialogRemove = defineModel({default: false})

</script>
