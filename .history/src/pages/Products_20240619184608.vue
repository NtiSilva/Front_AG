<template>
  <div>
    <h2>products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <!-- Other product information -->
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('productsModule',['products'])
  },
  methods: {
    ...mapActions('productsModule',['fetchProducts'])
  },
  mounted() {
    console.log('saiu')
    console.log('this', this.$store)
    this.fetchProducts();
  }
};
</script>
