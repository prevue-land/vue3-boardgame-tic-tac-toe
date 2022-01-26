<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
html,
body,
#app {
  width: 100vw;
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
