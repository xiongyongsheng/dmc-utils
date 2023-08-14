import checkPhoneNumber from "./checkPhoneNumber";
export default function formatPhoneNumber(
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
