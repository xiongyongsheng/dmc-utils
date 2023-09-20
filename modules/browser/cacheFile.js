function isImage(filename) {
  return /\.(?:png|jpe?g|webp|avif|gif)$/i.test(filename);
}
function callback(url) {
  if (isImage(url)) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.onload = function () {
        this.aspectRatio = this.naturalWidth / this.naturalHeight;
        res(this);
      };
      img.onerror = function (e) {
        rej(e);
      };
      img.src = url;
    });
  } else {
    return Promise.reject(`${url} not a image.`);
  }
}
export default function cacheFile(fileUrls) {
  if (fileUrls instanceof Array) {
    return Promise.all(fileUrls.map(callback));
  } else if (fileUrls instanceof Object) {
    const keys = Object.keys(fileUrls);
    return Promise.all(
      keys.map((key) => {
        return callback(fileUrls[key]).then((res) => {
          return {
            [key]: res,
          };
        });
      })
    ).then((result) => {
      let obj = {};
      result.forEach((item) => {
        obj = {
          ...obj,
          ...item,
        };
      });
      return obj;
    });
  }
}
