// modules/browser.js
function i(o) {
  o ? (sessionStorage.setItem("__scrollTop", document.scrollingElement.scrollTop), document.body.style.top = `${-document.scrollingElement.scrollTop}px`, document.body.style.position = "fixed") : (document.body.style.position = "static", document.body.style.top = "auto", document.scrollingElement.scrollTop = Number(
    sessionStorage.getItem("__scrollTop")
  ));
}
function r(o) {
  let e = document.createElement("img");
  return e.src = o, e.style.position = "fixed", e.style.top = "-99999px", e.style.opacity = 0, e.style.zIndex = -9999, new Promise((l, n) => {
    e.onload = (t) => {
      let { naturalWidth: s, naturalHeight: c } = e;
      document.body.removeChild(e), l({ url: o, naturalWidth: s, naturalHeight: c });
    }, e.onerror = (t) => {
      n(t);
    }, document.body.append(e);
  });
}
export {
  r as getImageNaturalSize,
  i as handleDisablePageScroll
};
