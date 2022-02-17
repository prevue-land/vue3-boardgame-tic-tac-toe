<script setup lang="ts">
import { computed, inject, Ref } from 'vue';

import BlockButton from './BlockButton.vue';
import { BoardgameIoClient, CustomCtx } from '@/types';
import { playerHtmlEntity } from '@/utils/playerHtmlEntity';

const client = inject<Ref<BoardgameIoClient>>('client');
const ctx = inject<Ref<CustomCtx>>('ctx');

const dialogHeaderText = computed<string>(() => {
  const gameResult = ctx?.value.gameover?.winner as string;
  const player = playerHtmlEntity(ctx?.value.currentPlayer as string);

  return gameResult === 'draw' ? "It's a draw!" : `${player} wins!`;
});
</script>

<template>
  <div id="dialog-container">
    <dialog open>
      <h3 v-html="dialogHeaderText"></h3>
      <BlockButton @click="client?.reset()">Play again</BlockButton>
      <RouterLink to="/">
        <BlockButton>Back to main menu</BlockButton>
      </RouterLink>
    </dialog>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#dialog-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  overflow: auto;
  z-index: 1;
  left: 0;
  top: 0;
  animation: fadeIn ease-in 1s;
}

h3 {
  text-align: center;
}

dialog {
  background-color: #fff;
  border: 1px solid #888;
  padding: 20px;
  max-width: 400px;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.7);
}
</style>
