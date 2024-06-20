<template>
  <v-dialog max-width="500" v-model="props.modalActive">
  <template v-slot:activator="{ props: activatorProps }">
    <v-icon v-bind="activatorProps" size="small" icon="mdi-delete"/>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Confirmar deletar">
      <v-card-text>
        Tem certeza que quer excluir esse registro?
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Quero sim"
          @click="confirm()"
          color="green"
        ></v-btn>

        <v-btn
          text="Cancelar"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
</template>

<script>
import { defineProps } from 'vue';
  export default {
    emits: ['accepted'],
    props: ['modalActive'],
    setup(props, { emit }) {
    // const props = defineProps(['modalActive']);

    const confirm = () => {
      emit('accepted');
    };

    return { props, confirm };
  }
  }
</script>
