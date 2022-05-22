<template>
  <h2>Welcome, {{ username }}</h2>
  <p>Auth data: {{ authData }}</p>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { computed } from 'vue'

  const store = useStore()
  const username = computed(() => store.state.username);
  const authData = store.state.auth;
</script>

<style scoped>

</style>