function palindrome(str) {
  let pattern = /[a-zA-Z0-9]/;
  let myArr1 = str
  .toLowerCase().split("")
  .filter(item => item.match(pattern))
  .reverse()
  .join("");
  let myArr2 = str
  .toLowerCase().split("")
  .filter(item => item.match(pattern))
  .join("");
  return myArr1 === myArr2;
}
