import hasMixedCase from "./hasMixedCase";
import hasNumbers from "./hasNumbers";
import hasSpecialCharacters from "./hasSpecialCharacters";
export default function checkPassword(str) {
  return str = str.trim(), str ? hasMixedCase(str) ? hasNumbers(str) ? hasSpecialCharacters(str) ? Promise.resolve(!0) : Promise.reject("\u5FC5\u987B\u5305\u542B\u7279\u6B8A\u5B57\u7B26") : Promise.reject("\u5FC5\u987B\u5305\u542B\u6570\u5B57") : Promise.reject("\u5FC5\u987B\u5305\u542B\u5927\u5C0F\u5199\u5B57\u6BCD") : Promise.reject("\u4E0D\u80FD\u4E3A\u7A7A");
}
