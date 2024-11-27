export function copyObject(orig) {
  var copy = Object.create(Object.getPrototypeOf(orig));
  return copyOwnPropertiesFrom(copy, orig), copy;
}
export function copyOwnPropertiesFrom(target, source) {
  return Object.getOwnPropertyNames(source).forEach(function(propKey) {
    var desc = Object.getOwnPropertyDescriptor(source, propKey);
    Object.defineProperty(target, propKey, desc);
  }), target;
}
export function copyObjectNew(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}
