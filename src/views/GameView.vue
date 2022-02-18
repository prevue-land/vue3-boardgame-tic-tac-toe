<script setup lang="ts">
import { computed, inject, onBeforeUnmount, Ref } from 'vue';

import TicTacToeBoard from '@/components/TicTacToeBoard.vue';
import GameOverDialog from '@/components/GameOverDialog.vue';

import { BoardgameIoClient, CustomCtx, Player } from '@/types';
import { playerHtmlEntity } from '@/utils/playerHtmlEntity';

const client = inject<Ref<BoardgameIoClient>>('client');
const ctx = inject<Ref<CustomCtx>>('ctx');

const currentPlayerTurnMessage = computed<string>(() => {
  const currentPlayerEntity = playerHtmlEntity(
    ctx?.value.currentPlayer as Player
  );

  return `It's ${currentPlayerEntity}'s turn`;
});

client?.value.start();

onBeforeUnmount(() => {
  client?.value.reset();
  client?.value.stop();
});
</script>

<template>
  <h1 id="mode-header">Tic Tac Toe</h1>
  <TicTacToeBoard />
  <p id="turn-message" v-html="currentPlayerTurnMessage"></p>
  <GameOverDialog v-if="ctx?.gameover" />
</template>

<style scoped>
#mode-header {
  margin-bottom: 2.5rem;
}

#turn-message {
  margin-top: 2.5rem;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
}
</style>
