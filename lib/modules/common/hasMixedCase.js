export default function hasMixedCase(str) {
  return /[a-z]/.test(str) && /[A-Z]/.test(str);
}
