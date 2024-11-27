export default function inheritedPropertyNames(obj) {
  var props = {};
  while (obj) {
    Object.getOwnPropertyNames(obj).forEach(function (p) {
      props[p] = true;
    });
    obj = Object.getPrototypeOf(obj);
  }
  return Object.getOwnPropertyNames(props);
}
