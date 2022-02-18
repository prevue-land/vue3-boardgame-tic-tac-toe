import { TurnConfig } from 'boardgame.io';
import { Client } from 'boardgame.io/client';
import { INVALID_MOVE } from 'boardgame.io/core';

import { isVictory } from './utils/isVictory';
import { isDraw } from './utils/isDraw';

import {
  State,
  ClientSetupFunction,
  Moves,
  EndIfFunction,
  CustomCtx
} from './types';

const setup: ClientSetupFunction = () => ({
  cells: new Array(9).fill(null)
});

const moves: Moves = {
  markCell(G, ctx, index: number) {
    if (G.cells[index] !== null) {
      return INVALID_MOVE;
    }

    G.cells[index] = ctx.currentPlayer;
  }
};

const turn: TurnConfig = {
  minMoves: 1,
  maxMoves: 1
};

const endIf: EndIfFunction = (G, ctx) => {
  if (isVictory(G.cells)) {
    return { winner: ctx.currentPlayer };
  } else if (isDraw(G.cells)) {
    return { winner: 'draw' };
  }
};

const game = { setup, moves, turn, endIf };

export const client = Client<State, CustomCtx>({
  game,
  debug: import.meta.env.MODE === 'development'
});
