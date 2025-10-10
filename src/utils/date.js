const twoDigit = (num) => String(num).padStart(2, '0');

export function formatDateTime(date = new Date()) {
  const YYYY = date.getFullYear();
  const MM = twoDigit(date.getMonth() + 1);
  const DD = twoDigit(date.getDate());
  const HH = twoDigit(date.getHours());
  const mm = twoDigit(date.getMinutes());
  const ss = twoDigit(date.getSeconds());
  return `${YYYY}-${MM}-${DD} ${HH}:${mm}:${ss}`;
}
