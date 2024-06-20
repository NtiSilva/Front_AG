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
    ...mapState('projectsModule',['projects']) // Mapping projects state from Vuex store
  },
  methods: {
    ...mapActions('projectsModule',['fetchProjects']) // Mapping fetchProjects action from Vuex store
  },
  mounted() {
    // Fetch projects data when the component is mounted
    console.log('saiu')
    console.log('this', this.$store.state.products)
    // this.$store.state.products._actions.fetchProjects

  }
};
</script>
