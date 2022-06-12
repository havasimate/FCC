function steamrollArray(arr) {
  return arr
  .toString()
  .replace(",,",",")
  .split(",")
  .map(item => {
    if (item == "[object Object]") {
        return {};
      } else if (isNaN(item)) {
        return item;
      } else {
        return parseInt(item);
      }
  })
}
