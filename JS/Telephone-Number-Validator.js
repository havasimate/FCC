function telephoneCheck(str) {
  let pattern1 = /(^(1\s?)?[0-9]{3})(-)([0-9]{3})(-)([0-9]{4}$)/;
  let pattern2 = /^(1\s?)?(\()([0-9]{3})(\))(\s?)([0-9]{3})(-)([0-9]{4}$)/;
  let pattern3 = /^(1\s?)?([0-9]{3})(\s)([0-9]{3})(\s)([0-9]{4}$)/;
  let pattern4 = /^(1\s?)?([0-9]){10}$/;

  if(str.match(pattern1) || str.match(pattern2) || str.match(pattern3) || str.match(pattern4)){
    return true
  }
  return false;
}
