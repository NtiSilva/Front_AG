<template>
  <div>
    <h2>Projects</h2>
    <ul>
      <li v-for="project in projects" :key="project.id">
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <!-- Other project information -->
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
    console.log('this', this.$store.state.products)
    this.fetchProducts();
  }
};
</script>
