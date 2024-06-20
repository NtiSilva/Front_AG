<template>
  <Dialog v-model="showEdit" :title="'Editar projeto'">

  <form @submit.prevent="submit" class="pa-md-4 mx-lg-auto">
    <v-text-field
      v-model="name.value.value"
      :counter="60"
      :error-messages="name.errorMessage.value"
      label="Nome do projeto"
      color="deep-purple"
      variant="outlined"
    ></v-text-field>

    <v-textarea
      v-model="description.value.value"
      :counter="255"
      color="deep-purple"
      label="Descrição"
      variant="outlined"
    ></v-textarea>

    <v-select
      v-model="select.value.value"
      :error-messages="select.errorMessage.value"
      :items="items"
      label="Responsável"
      variant="outlined"
    ></v-select>
    <v-date-input
      v-model="model"
      label="Select a date"
      max-width="368"
    ></v-date-input>
  </form>
  </Dialog>
</template>

<script setup>
  import { ref } from 'vue'
  import { useField, useForm } from 'vee-validate'

  import Dialog from './Dialog.vue'
    components: { Dialog }
    name: 'DialogEdit'

    const showEdit = defineModel({default: false})

  const { handleSubmit, handleReset } = useForm({
    validationSchema: {
      name (value) {
        if (value?.length >= 2) return true

        return 'Nome não pode ter menos que 2 letras.'
      },
      select (value) {
        if (value) return true

        return 'Select um responsável'
      }
    },
  })
  const name = useField('name')
  const description = useField('description')
  const phone = useField('phone')
  const email = useField('email')
  const select = useField('select')
  const checkbox = useField('checkbox')

  const items = ref([
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ])

  const submit = handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
</script>
