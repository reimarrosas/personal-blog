export const parseToReadableDate = (date: string): string => {
  const dateObj = new Date(date);
  const parsedMonth = dateObj.toLocaleDateString('default', {
    month: 'long'
  });
  return `${dateObj.getDate()} ${parsedMonth} ${dateObj.getFullYear()}`;
};
