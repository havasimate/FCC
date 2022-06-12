function truthCheck(collection, pre) {
  return collection.every(item => item[pre]);
}
