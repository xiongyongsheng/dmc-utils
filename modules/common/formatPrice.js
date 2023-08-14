export default function formatPrice(amount = 0) {
  if (amount === null) {
    return "";
  }
  const [integer, decimal] = amount.toString().split(".");
  let [...strArr] = integer;
  let newStrArr = [];
  let i = 0;
  const flag = integer.includes("-");
  strArr
    .filter((item) => {
      return item !== "-";
    })
    .reverse()
    .forEach((item, index) => {
      if (i < 3) {
        i++;
        newStrArr.push(item);
      } else {
        i = 1;
        newStrArr.push(",");
        newStrArr.push(item);
      }
    });
  if (flag) {
    newStrArr.push("-");
  }
  return `${newStrArr.reverse().join("")}.${decimal ? decimal : "00"}`;
}
