<template>
  <div>
    <v-alert
      v-model="showAlert"
      :border="start"
      :type="typeAlert"
      close-label="Close Alert"
      variant="tonal"
      closable
      :text="messageAlert"
    >
    </v-alert>
  </div>
</template>

<script setup>
import { ref, defineProps, defineModel } from "vue";

const showAlert = defineModel({ default: false });

name: "Alert";

const props = defineProps({
  messageAlert: {
    type: String,
    required: true,
  },
  typeAlert: {
    type: String,
    default: "success",
  },
});
</script>
