<template>
  <v-dialog max-width="500" v-model="modalActive">
    <template v-slot:default="{ isActive }">
      <v-card title="Confirmar deletar">
        <v-card-text>
          Tem certeza que quer excluir esse registro?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Quero sim"
            @click="confirm"
            color="green"
          ></v-btn>

          <v-btn
            text="Cancelar"
            @click="modalActive = false"
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
  setup(_, { emit }) {
    const { modalActive } = defineProps({
      modalActive: Boolean
    });

    const confirm = () => {
      emit('accepted');
    };

    return { modalActive, confirm };
  }
};
</script>

