export default function getImageNaturalSize(url) {
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
