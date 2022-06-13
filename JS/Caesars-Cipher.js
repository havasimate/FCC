function rot13(str) {
  return str
  .split("")
  .map(function(item){
    if(!(item.match(/[,.!?]/))){
      if(item.charCodeAt() - 64 + 13 > 26){
        return String.fromCharCode(item.charCodeAt() - 13);;
    }
      else {
        return String.fromCharCode(item.charCodeAt() + 13);
      }
    }
    else {
      return item;
    }
  })
  .join("")
  .replaceAll("-", " ");
}
