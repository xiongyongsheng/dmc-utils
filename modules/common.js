export function formatHideString(
  string,
  { start = 0, count = string.length, divide = "*" } = {}
) {
  const stringArr = string.toString().split("");
  return `${stringArr.slice(0, start).join("")}${stringArr
    .slice(start, start + count)
    .map(() => divide)
    .join("")}${stringArr.slice(start + count).join("")}`;
}

export function formatPrice(amount = 0) {
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

export function checkPhoneNumber(
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

export function formatPhoneNumber(
  number,
  { before = 3, after = 7, divide = " ", isCheckPhoneNumber = true } = {}
) {
  try {
    const phoneString = number.toString().replace(/\D/g, "");
    if (checkPhoneNumber(phoneString) || !isCheckPhoneNumber) {
      const beforeString = phoneString.slice(0, before);
      const middleString = phoneString.slice(before, after);
      const afterString = phoneString.slice(after, phoneString.length);
      return {
        value: [beforeString, middleString, afterString]
          .filter((item) => item !== "")
          .join(divide),
        trimValue: phoneString,
        beforeString,
        middleString,
        afterString,
        flag: true,
      };
    }
    return {
      value: number,
      trimValue: phoneString,
      beforeString: "",
      middleString: "",
      afterString: "",
      flag: false,
    };
  } catch (err) {
    console.error("err: ", err);
    return "";
  }
}
