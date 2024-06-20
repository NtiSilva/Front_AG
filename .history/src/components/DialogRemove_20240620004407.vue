<template>
 <Dialog v-model="showDialog">
    <div> Texto </div>
  </Dialog>

</template>

<script>
  import { ref} from 'vue'
  import Dialog from '@/components/Dialog.vue'
  export default {
    setup() {
      const showDialog = defineModel({default: false})
    },
  }
</script>
