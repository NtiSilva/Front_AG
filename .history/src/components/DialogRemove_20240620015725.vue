<template>
  <Dialog v-model="showDialogRemove" :title="'Excluir projeto'">
    <p class="text-body-2 pa-md-4 mx-lg-auto">
      Tem certeza que quer excluir esse registro? sgyagygsyagsyagsyagsyagsygasygasygaysgaysgaysgay
    </p>
  </Dialog>

</template>

<script setup>
  import Dialog from './Dialog.vue'
    components: { Dialog }
    name: 'DialogRemove'

    const showDialogRemove = defineModel({default: false})

</script>
