<template>
  <button class="block-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.block-button {
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background-color: #35495e;
  color: white;
  border: none;
  text-align: center;
  transition: 0.3s;
}

button:hover {
  background-color: #42b883;
  color: #000;
  outline: none;
}
</style>
