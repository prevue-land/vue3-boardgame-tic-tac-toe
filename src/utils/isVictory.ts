import { PossibleCellValue } from '@/types';

export function isVictory(cells: PossibleCellValue[]) {
  const winningPositionIndexes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const isWinningCombination = (row: number[]) => {
    const playerSymbols = row.map((index) => cells[index]);

    return playerSymbols.every(
      (symbol) => symbol !== null && symbol === playerSymbols[0]
    );
  };

  return winningPositionIndexes
    .map(isWinningCombination)
    .some((i) => i === true);
}
