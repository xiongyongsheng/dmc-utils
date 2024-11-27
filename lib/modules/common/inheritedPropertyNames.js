export default function inheritedPropertyNames(obj) {
  for (var props = {}; obj; )
    Object.getOwnPropertyNames(obj).forEach(function(p) {
      props[p] = !0;
    }), obj = Object.getPrototypeOf(obj);
  return Object.getOwnPropertyNames(props);
}
