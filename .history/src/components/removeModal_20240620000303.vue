<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="showModalRemove"
      max-width="400"
      persistent
    >
      <!-- <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps">
          Open Dialog
        </v-btn>
      </template> -->

      <v-card
        prepend-icon="mdi-map-marker"
        text="Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        title="Use Google's location service?"
      >
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="showModalRemove = false">
            Disagree
          </v-btn>

          <v-btn @click="showModalRemove = false">
            Agree
          </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showModalRemove: false,
      }
    },
  }
</script>
