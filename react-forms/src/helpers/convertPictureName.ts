export function convertPictureName(path: string | undefined) {
  if (path) {
    return path.substring(path.lastIndexOf('\\') + 1);
  }
  return '';
}

export function checkFileExtension(fileName: string) {
  const extension = fileName.substring(fileName.lastIndexOf('.'));
  if (extension === '.png' || extension === '.gif' || extension === '.jpeg') {
    return true;
  }
  return false;
}
