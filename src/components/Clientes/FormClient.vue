<template>
  <form @submit.prevent="submit">
    <v-container class="m-3">
      <v-btn
        class="ms-2 py-1 mb-2 d-flex"
        color="deep-purple-lighten-1"
        @click="navigateTo"
      >
        Ver todos
      </v-btn>
      <v-card>
        <v-layout class="bg-purple-lighten-5">
          <v-system-bar class="bg-deep-purple"> </v-system-bar>
          <v-app-bar
            class="bg-deep-purple-lighten-1"
            title="Cadastrar novo cliente"
            flat
          >
            <template v-slot:prepend></template>
          </v-app-bar>
          <v-main>
            <v-container class="pt-8 bg-deep-purple-lighten-5">
              <slot name="body"></slot>
              <v-text-field
                v-model="name.value.value"
                label="Nome"
                variant="outlined"
                :counter="60"
                :error-messages="name.errorMessage.value"
              ></v-text-field>

              <v-text-field
                v-model="phone.value.value"
                label="Telefone"
                :counter="7"
                variant="outlined"
                :error-messages="phone.errorMessage.value"
              ></v-text-field>

              <v-text-field
                v-model="email.value.value"
                label="E-mail"
                variant="outlined"
                :error-messages="email.errorMessage.value"
              ></v-text-field>

              <v-text-field
                v-model="address.value.value"
                label="Endereço completo"
                variant="outlined"
              ></v-text-field>

              <v-text-field
                v-model="company.value.value"
                label="Empresa"
                variant="outlined"
              ></v-text-field>
            </v-container>
          </v-main>
        </v-layout>

        <template v-slot:actions>
          <v-btn color="#4603c0" :disabled="isSubmitting" type="submit"
            >Salvar</v-btn
          >
          <v-btn color="#4603c0" @click="handleReset">Limpar</v-btn>
        </template>
      </v-card>
    </v-container>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";

const store = useStore();
const router = useRouter();

const { handleSubmit, handleReset, isSubmitting } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Nome precisa ter mais que 2 caracteres.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Telefone em fomato invalido e com menos números que 9";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "E-mail em formato errado.";
    },
  },
});

const name = useField("name");
const phone = useField("phone");
const email = useField("email");
const address = useField("address");
const company = useField("company");

const submit = handleSubmit(async (values) => {
  try {
    await store.dispatch("clientsModule/addClient", values);
    navigateTo;
    alert("Cliente adicionado com sucesso");
    handleReset();
  } catch (error) {
    alert("Não foi possivel adicionar cliente, tente mais tarde.");
    console.error("Erro ao adicionar cliente", error);
  }
});

function navigateTo() {
  router.push({ name: "ListClients" });
}
</script>
