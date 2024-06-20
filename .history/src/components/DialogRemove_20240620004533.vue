<template>
 <Dialog v-model="showDialog">
    <div> Texto </div>
  </Dialog>

</template>

<script>
  import { ref} from 'vue'
  import Dialog from './Dialog.vue'
  export default {
    components: { Dialog },
    name: 'DialogRemove',
    setup() {
      const showDialog = defineModel({default: false})
    },
  }
</script>
