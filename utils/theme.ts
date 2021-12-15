export const getThemeClass = (isLight: boolean): string =>
  `theme${isLight ? '' : '-dark'}`;
