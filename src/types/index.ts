import type { Ctx, Move } from 'boardgame.io';
import { client } from '@/client';

export type Player = '0' | '1';

export type PossibleCellValue = Player | null;

export type State = {
  cells: PossibleCellValue[];
};

export type ClientSetupFunction = () => State;

export type Moves = { markCell: Move<State> };

export type GameOverState = { winner: Player | 'draw' };

export type CustomCtx = Omit<Ctx, 'gameover'> & {
  gameover?: GameOverState;
};

export type EndIfFunction = (G: State, ctx: CustomCtx) => GameOverState | void;

export type BoardgameIoClient = typeof client;
