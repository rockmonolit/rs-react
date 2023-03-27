import { FormCardProps } from '../components/formCard/formCard';
import { checkFileExtension } from './convertPictureName';

export function validation(props: FormCardProps) {
  let errorCount = 0;

  const errors = { name: '', date: '', weapon: '', side: '', planet: '', photo: '' };

  if (props.name.length < 2 || props.name.length > 12) {
    const prevError = errors.name;
    errors.name =
      prevError + 'The Name Field should contain at least 2, but no more than 12 characters.\n';
    errorCount++;
  }

  if (props.name && !props.name.match(/^[a-zA-Z]+$/)) {
    const prevError = errors.name;
    errors.name = prevError + 'Excuse-moi, but only Latin letters are allowed here.\n';
    errorCount++;
  }

  if (props.name && !props.name[0].match(/^[A-Z]+$/)) {
    const prevError = errors.name;
    errors.name = prevError + 'Do you remember, that your name starts with capital letter?\n';
    errorCount++;
  }

  if (props.date.length <= 0) {
    errors.date = "Don't you forget insert a date?";
    errorCount++;
  }

  if (new Date(props.date) > new Date()) {
    errors.date = 'Are you sure that you are from the future?';
    errorCount++;
  }

  if (
    new Date(props.date).getFullYear() === new Date().getFullYear() &&
    new Date(props.date).getMonth() === new Date().getMonth() &&
    new Date(props.date).getDate() === new Date().getDate()
  ) {
    errors.date = 'What does the newborn forgot around here?';
    errorCount++;
  }

  if (!props.hasWeapon) {
    errors.weapon = 'Liar! Each and every cool transformer has a weapon!';
    errorCount++;
  }

  if (!props.preferredSide) {
    errors.side = 'Please, pick a side.';
    errorCount++;
  }

  if (!props.homePlanet) {
    errors.planet = "Don't forget to choose a planet.";
    errorCount++;
  }

  if (!props.picture) {
    errors.photo = 'Please, upload your greatest Holography.';
    errorCount++;
  }

  if (props.picture && checkFileExtension(props.picture) === false) {
    errors.photo = 'Only gif/jpeg/png files are allowed.';
    errorCount++;
  }

  return errorCount === 0 ? 'true' : errors;
}
