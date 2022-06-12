function binaryAgent(str) {
  return str
  .split(" ")
  .map(item => String.fromCharCode(parseInt(item,2)))
  .join("")
}
