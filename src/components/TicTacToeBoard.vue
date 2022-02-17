<script setup lang="ts">
import { inject, Ref } from 'vue';

import { BoardgameIoClient, CustomCtx, State } from '@/types';
import { playerHtmlEntity } from '@/utils/playerHtmlEntity';

const client = inject<Ref<BoardgameIoClient>>('client');
const G = inject<Ref<State>>('G');
const ctx = inject<Ref<CustomCtx>>('ctx');
</script>

<template>
  <div id="tic-tac-toe-board">
    <div
      v-for="(cell, index) in G?.cells"
      :key="index"
      class="cell"
      v-html="playerHtmlEntity(cell)"
      @click="!ctx?.gameover && client?.moves.markCell(index)"
    ></div>
  </div>
</template>

<style scoped>
#tic-tac-toe-board {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  overflow: hidden;
}

#tic-tac-toe-board > div {
  width: 150px;
  height: 150px;
  font-size: 36px;
  outline: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

#tic-tac-toe-board > div:last-of-type {
  grid-area: 3 / 3;
}
</style>
