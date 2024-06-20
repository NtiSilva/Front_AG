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
      v-model="dtInit.value.value"
      label="Data do ínicio do projeto"
      prepend-icon=""
      variant="outlined"
      persistent-placeholder
    ></v-date-input>

    <v-date-input
      v-model="dtEnd.value.value"
      label="Data prevista do final do projeto"
      prepend-icon=""
      variant="outlined"
      persistent-placeholder
    ></v-date-input>


    <v-col class="p-2"
        cols="12"
      >
        <p>Text Options</p>

        <v-btn-toggle
          v-model="status.value.value"
          color="deep-purple-accent-3"
          rounded="0"
          group
        >
          <v-btn value="left">
            ABERTO
          </v-btn>

          <v-btn value="center">
            EM ANDAMENTO
          </v-btn>

          <v-btn value="right">
            FECHADO
          </v-btn>
        </v-btn-toggle>
      </v-col>

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
  const dtInit = useField('dtInit')
  const dtEnd = useField('dtEnd')
  const select = useField('select')
  const status = useField('status')

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
