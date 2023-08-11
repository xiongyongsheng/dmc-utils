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
export {
  getImageNaturalSize,
  handleDisablePageScroll
};
