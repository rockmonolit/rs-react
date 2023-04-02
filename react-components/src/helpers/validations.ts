export function startsWithCapital(value: string) {
  return value.charAt(0) === value.charAt(0).toUpperCase();
}

export function isFutureDate(value: string) {
  return new Date(value) > new Date() !== true;
}

export function isDateToday(value: string) {
  if (
    new Date(value).getFullYear() === new Date().getFullYear() &&
    new Date(value).getMonth() === new Date().getMonth() &&
    new Date(value).getDate() === new Date().getDate()
  ) {
    return false;
  }
  return true;
}

export function isPictureFormatValid(value: File[]) {
  const item = value[0].name;
  const extension = item.substring(item.lastIndexOf('.'));
  if (
    extension === '.png' ||
    extension === '.gif' ||
    extension === '.jpeg' ||
    extension === '.jpg'
  ) {
    return true;
  }
  return false;
}
