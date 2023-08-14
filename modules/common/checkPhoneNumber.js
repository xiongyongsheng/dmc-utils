export default function checkPhoneNumber(
  number,
  { validator = /^[1][3456789][0-9]{9}$/ } = {}
) {
  if (validator instanceof RegExp) {
    return validator.test(number);
  } else if (validator instanceof Function) {
    return validator(number);
  } else {
    console.warn(`validator is ${typeof validator}`);
    return false;
  }
}
