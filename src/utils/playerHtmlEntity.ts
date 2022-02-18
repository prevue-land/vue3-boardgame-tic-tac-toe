export function playerHtmlEntity(player: '0' | '1' | null) {
  const entityMap = {
    '0': '&#9711;',
    '1': '&#10005;'
  };

  return player === null ? '' : entityMap[player];
}
