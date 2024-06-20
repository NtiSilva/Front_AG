<template>
  <v-dialog max-width="500">
  <template v-slot:activator="{ props: activatorProps }">
    <v-icon
    v-bind="activatorProps"
          size="small"
          @click="deleteItem(item)"
          icon="mdi-delete"
        />
    <!-- <v-btn

      color="surface-variant"
      variant="flat"

    ></v-btn> -->
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Dialog">
      <v-card-text>
        Tem certeza que quer excluir?
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Quero sim"
          @click="$emit('confirm')"
        ></v-btn>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
</template>

<script>
  export default {
    emits: ['accepted']
  }
</script>
