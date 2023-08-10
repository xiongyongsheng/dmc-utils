// modules/common.js
function g(n, { start: e = 0, count: i = n.length, divide: l = "*" } = {}) {
  let t = n.toString().split("");
  return `${t.slice(0, e).join("")}${t.slice(e, e + i).map(() => l).join("")}${t.slice(e + i).join("")}`;
}
function p(n = 0) {
  if (n === null)
    return "";
  let [e, i] = n.toString().split("."), [...l] = e, t = [], r = 0, s = e.includes("-");
  return l.filter((o) => o !== "-").reverse().forEach((o, c) => {
    r < 3 ? (r++, t.push(o)) : (r = 1, t.push(","), t.push(o));
  }), s && t.push("-"), `${t.reverse().join("")}.${i || "00"}`;
}
function u(n, { validator: e = /^[1][3456789][0-9]{9}$/ } = {}) {
  return e instanceof RegExp ? e.test(n) : e instanceof Function ? e(n) : (console.warn(`validator is ${typeof e}`), !1);
}
function h(n, { before: e = 3, after: i = 7, divide: l = " ", isCheckPhoneNumber: t = !0 } = {}) {
  try {
    let r = n.toString().replace(/\D/g, "");
    if (u(r) || !t) {
      let s = r.slice(0, e), o = r.slice(e, i), c = r.slice(i, r.length);
      return {
        value: [s, o, c].filter((f) => f !== "").join(l),
        trimValue: r,
        beforeString: s,
        middleString: o,
        afterString: c,
        flag: !0
      };
    }
    return {
      value: n,
      trimValue: r,
      beforeString: "",
      middleString: "",
      afterString: "",
      flag: !1
    };
  } catch (r) {
    return console.error("err: ", r), "";
  }
}
export {
  u as checkPhoneNumber,
  g as formatHideString,
  h as formatPhoneNumber,
  p as formatPrice
};
