import { PossibleCellValue } from '@/types';

export function isDraw(cells: PossibleCellValue[]) {
  return cells.filter((c) => c === null).length === 0;
}
