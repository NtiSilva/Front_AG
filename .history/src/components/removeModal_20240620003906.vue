<template>
 <Dialog v-model="showDialog">
    <div> Texto </div>
  </Dialog>

</template>

<script>
  import Dialog from '@/components/Dialog.vue'
  export default {
    setup() {
      const showDialog = ref(false)
    },
  }
</script>
