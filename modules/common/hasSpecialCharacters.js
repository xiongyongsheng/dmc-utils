export default function hasSpecialCharacters(str) {
  return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
}
