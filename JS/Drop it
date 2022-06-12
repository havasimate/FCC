function dropElements(arr, func) {
  let counter = 0;
  for(let i = 0; i < arr.length-1; i++){
    if(func(arr[i])) {
      counter ++;
    }
    if(func(arr[i]) == false && func(arr[i+1]) == true) {
      arr.splice(0,i+1);
      return arr;
    }
  }
  return counter == 0 ? [] : arr;
}

