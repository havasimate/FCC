function smallestCommons(arr) {
  let nums = [];
  let k = Math.max(...arr)+1;
  for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
    nums.push(i);
  }
  let flag = 0 - nums.length;
  while(flag !== 0){
    for(let i = 0; i < nums.length; i++) {
      if(k % nums[i] == 0){
        flag += 1;
      }
      else {
        flag = flag = 0 - nums.length;
      }
    }
    if(flag == 0){
      return k;
    }
    else {
      k++;
    }
  }
}
