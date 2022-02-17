import type { Ctx, Move } from 'boardgame.io';
import { client } from '@/client';

export type State = {
  cells: (string | null)[];
};

export type SetupFunction = () => State;

export type Moves = { markCell: Move<State> };

export type CustomCtx = Omit<Ctx, 'gameover'> & {
  gameover?: { winner: string };
};

export type EndIfFunction = (
  G: State,
  ctx: CustomCtx
) => { winner: string } | void;

export type BoardgameIoClient = typeof client;
