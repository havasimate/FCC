function addTogether() {
  let x = arguments[0];
  let y = arguments[1];
  if (typeof(x) !== "number")
    return undefined;
  if (y === undefined)
    return (y) => addTogether(x, y);
  if (typeof(y) !== "number")
    return undefined;
  return x + y;
}
