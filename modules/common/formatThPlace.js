export default function formatThPlace(number) {
  const num = Number(number);
  if (!isNaN(num)) return number;
  if (num >= 10000) {
    return `${num / 10000}万`;
  } else {
    return num;
  }
}
