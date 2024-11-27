import hasMixedCase from "./hasMixedCase";
import hasNumbers from "./hasNumbers";
import hasSpecialCharacters from "./hasSpecialCharacters";

/**
 * 检查密码是否符合要求
 * @param {string} str - 要检查的密码字符串
 * @returns {Promise} - 如果密码符合要求，解析为 true；如果不符合要求，拒绝并返回相应的错误消息
 */
export default function checkPassword(str) {
  // 去除字符串两端的空格
  str = str.trim();
  // 如果字符串为空，则返回 Promise.reject，拒绝并返回错误消息 "不能为空"
  if (!str) return Promise.reject("不能为空");
  // 如果字符串不包含大小写字母，则返回 Promise.reject，拒绝并返回错误消息 "必须包含大小写字母"
  if (!hasMixedCase(str)) return Promise.reject("必须包含大小写字母");
  // 如果字符串不包含数字，则返回 Promise.reject，拒绝并返回错误消息 "必须包含数字"
  if (!hasNumbers(str)) return Promise.reject("必须包含数字");
  // 如果字符串不包含特殊字符，则返回 Promise.reject，拒绝并返回错误消息 "必须包含特殊字符"
  if (!hasSpecialCharacters(str)) return Promise.reject("必须包含特殊字符");
  return Promise.resolve(true);
}
