export function playerHtmlEntity(player: string | null) {
  const entityMap = {
    '0': '&#9711;',
    '1': '&#10005;'
  };

  return player === null ? '' : entityMap[player as keyof typeof entityMap];
}
