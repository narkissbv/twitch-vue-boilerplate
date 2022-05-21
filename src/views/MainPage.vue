<template>
  <h2>Welcome, {{ username }}</h2>
  <p>Auth data: {{ auth }}</p>
</template>

<script setup>
  const store = useStore()
  const username = computed(() => store.state.username);
  const authData = store.state.auth;
</script>

<style scoped>

</style>