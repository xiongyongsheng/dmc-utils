export default function formatThPlace(number) {
  const num = Number(number);
  return isNaN(num) ? num >= 1e4 ? `${num / 1e4}\u4E07` : num : number;
}
