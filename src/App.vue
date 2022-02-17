<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
html,
body,
#app,
main {
  width: 100vw;
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  margin-top: 0;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
