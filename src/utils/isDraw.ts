export function isDraw(cells: (string | null)[]) {
  return cells.filter((c) => c === null).length === 0;
}
