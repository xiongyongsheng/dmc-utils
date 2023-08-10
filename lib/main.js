// modules/browser.js
function m(t) {
  t ? (sessionStorage.setItem("__scrollTop", document.scrollingElement.scrollTop), document.body.style.top = `${-document.scrollingElement.scrollTop}px`, document.body.style.position = "fixed") : (document.body.style.position = "static", document.body.style.top = "auto", document.scrollingElement.scrollTop = Number(
    sessionStorage.getItem("__scrollTop")
  ));
}
function f(t) {
  let e = document.createElement("img");
  return e.src = t, e.style.position = "fixed", e.style.top = "-99999px", e.style.opacity = 0, e.style.zIndex = -9999, new Promise((n, i) => {
    e.onload = (o) => {
      let { naturalWidth: r, naturalHeight: s } = e;
      document.body.removeChild(e), n({ url: t, naturalWidth: r, naturalHeight: s });
    }, e.onerror = (o) => {
      i(o);
    }, document.body.append(e);
  });
}

// modules/common.js
function g(t, { start: e = 0, count: n = t.length, divide: i = "*" } = {}) {
  let o = t.toString().split("");
  return `${o.slice(0, e).join("")}${o.slice(e, e + n).map(() => i).join("")}${o.slice(e + n).join("")}`;
}
function p(t = 0) {
  if (t === null)
    return "";
  let [e, n] = t.toString().split("."), [...i] = e, o = [], r = 0, s = e.includes("-");
  return i.filter((l) => l !== "-").reverse().forEach((l, c) => {
    r < 3 ? (r++, o.push(l)) : (r = 1, o.push(","), o.push(l));
  }), s && o.push("-"), `${o.reverse().join("")}.${n || "00"}`;
}
function u(t, { validator: e = /^[1][3456789][0-9]{9}$/ } = {}) {
  return e instanceof RegExp ? e.test(t) : e instanceof Function ? e(t) : (console.warn(`validator is ${typeof e}`), !1);
}
function d(t, { before: e = 3, after: n = 7, divide: i = " ", isCheckPhoneNumber: o = !0 } = {}) {
  try {
    let r = t.toString().replace(/\D/g, "");
    if (u(r) || !o) {
      let s = r.slice(0, e), l = r.slice(e, n), c = r.slice(n, r.length);
      return {
        value: [s, l, c].filter((a) => a !== "").join(i),
        trimValue: r,
        beforeString: s,
        middleString: l,
        afterString: c,
        flag: !0
      };
    }
    return {
      value: t,
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
  d as formatPhoneNumber,
  p as formatPrice,
  f as getImageNaturalSize,
  m as handleDisablePageScroll
};
