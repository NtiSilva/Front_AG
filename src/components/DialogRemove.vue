<template>
  <Dialog v-model="showDialogRemove" :title="'Excluir projeto'">
    <template v-slot:body>
      <div>
        <p class="text-body-2 pa-md-4 mx-lg-auto">
          Tem certeza que quer excluir esse registro?
        </p>
      </div>
    </template>
    <template v-slot:buttons="">
      <v-btn @click="confirm">
        Confirmar
      </v-btn>
    </template>
  </Dialog>

</template>

<script setup>
  import { defineEmits, defineModel } from 'vue';
  import Dialog from './Dialog.vue'

  const emit = defineEmits(['confirm'])

  components: { Dialog }
  name: 'DialogRemove'

  const showDialogRemove = defineModel({default: false})

  const closeModal = () => {
    showDialogRemove.value = false
  };

  function confirm () {
    emit('confirm');
    closeModal();
  };
</script>
