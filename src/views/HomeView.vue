<script setup lang="ts">
import { RouterLink } from 'vue-router';
import BlockButton from '@/components/BlockButton.vue';
</script>

<template>
  <div id="menu-container">
    <h1>vue3-boardgame Tic Tac Toe</h1>
    <div id="menu-buttons">
      <RouterLink to="/game">
        <BlockButton>PLAY!</BlockButton>
      </RouterLink>
      <a href="https://weeklyovervue.com">
        <BlockButton>Read the tutorial article</BlockButton>
      </a>
      <RouterLink to="/about">
        <BlockButton>About</BlockButton>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
#menu-buttons {
  display: flex;
  flex-direction: column;
}
</style>
