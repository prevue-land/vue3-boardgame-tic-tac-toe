import { PossibleCellValue } from '@/types';

export function playerHtmlEntity(character: PossibleCellValue) {
  const entityMap = {
    '0': '&#9711;', // circle
    '1': '&#10005;' // cross
  };

  return character === null ? '' : entityMap[character];
}
