export const copiedArrayReverse = <T>(arr: T[] | null): T[] | null => {
  if (arr !== null) {
    return [...arr].reverse();
  }

  return arr;
};
