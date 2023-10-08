export default function getImageNaturalSize(url) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = function () {
      this.aspectRatio = this.naturalWidth / this.naturalHeight;
      res({ url, ...this });
    };
    img.onerror = function (e) {
      rej(e);
    };
    img.src = url;
  });
}
