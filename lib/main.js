// modules/browser.js
function handleDisablePageScroll(flag) {
  if (flag) {
    sessionStorage.setItem("__scrollTop", document.scrollingElement.scrollTop);
    document.body.style.top = `${-document.scrollingElement.scrollTop}px`;
    document.body.style.position = "fixed";
  } else {
    document.body.style.position = "static";
    document.body.style.top = `auto`;
    document.scrollingElement.scrollTop = Number(
      sessionStorage.getItem("__scrollTop")
    );
  }
}
function getImageNaturalSize(url) {
  const imgEl = document.createElement("img");
  imgEl.src = url;
  imgEl.style.position = "fixed";
  imgEl.style.top = `-99999px`;
  imgEl.style.opacity = 0;
  imgEl.style.zIndex = -9999;
  return new Promise((res, rej) => {
    imgEl.onload = (e) => {
      const { naturalWidth, naturalHeight } = imgEl;
      document.body.removeChild(imgEl);
      res({ url, naturalWidth, naturalHeight });
    };
    imgEl.onerror = (e) => {
      rej(e);
    };
    document.body.append(imgEl);
  });
}

// modules/common.js
function formatHideString(string, { start = 0, count = string.length, divide = "*" } = {}) {
  const stringArr = string.toString().split("");
  return `${stringArr.slice(0, start).join("")}${stringArr.slice(start, start + count).map(() => divide).join("")}${stringArr.slice(start + count).join("")}`;
}
function formatPrice(amount = 0) {
  if (amount === null) {
    return "";
  }
  const [integer, decimal] = amount.toString().split(".");
  let [...strArr] = integer;
  let newStrArr = [];
  let i = 0;
  const flag = integer.includes("-");
  strArr.filter((item) => {
    return item !== "-";
  }).reverse().forEach((item, index) => {
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
function checkPhoneNumber(number, { validator = /^[1][3456789][0-9]{9}$/ } = {}) {
  if (validator instanceof RegExp) {
    return validator.test(number);
  } else if (validator instanceof Function) {
    return validator(number);
  } else {
    console.warn(`validator is ${typeof validator}`);
    return false;
  }
}
function formatPhoneNumber(number, { before = 3, after = 7, divide = " ", isCheckPhoneNumber = true } = {}) {
  try {
    const phoneString = number.toString().replace(/\D/g, "");
    if (checkPhoneNumber(phoneString) || !isCheckPhoneNumber) {
      const beforeString = phoneString.slice(0, before);
      const middleString = phoneString.slice(before, after);
      const afterString = phoneString.slice(after, phoneString.length);
      return {
        value: [beforeString, middleString, afterString].filter((item) => item !== "").join(divide),
        trimValue: phoneString,
        beforeString,
        middleString,
        afterString,
        flag: true
      };
    }
    return {
      value: number,
      trimValue: phoneString,
      beforeString: "",
      middleString: "",
      afterString: "",
      flag: false
    };
  } catch (err) {
    console.error("err: ", err);
    return "";
  }
}
export {
  checkPhoneNumber,
  formatHideString,
  formatPhoneNumber,
  formatPrice,
  getImageNaturalSize,
  handleDisablePageScroll
};
