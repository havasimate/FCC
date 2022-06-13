function convertToRoman(num) {
  
  let roman = "";

  if(Math.floor(num/1000) != 0) {
    roman += "M".repeat(Math.floor(num/1000))
    num -= Math.floor(num/1000)*1000;
  }

  if(Math.floor(num/900) != 0) {
    roman += "CM".repeat(Math.floor(num/900))
    num -= Math.floor(num/900)*900;
  }

  if(Math.floor(num/500) != 0) {
    roman += "D".repeat(Math.floor(num/500))
    num -= Math.floor(num/500)*500;
  }

  if(Math.floor(num/400) != 0) {
    roman += "CD".repeat(Math.floor(num/400))
    num -= Math.floor(num/400)*400;
  }

  if(Math.floor(num/100) != 0) {
    roman += "C".repeat(Math.floor(num/100))
    num -= Math.floor(num/100)*100;
  }

  if(Math.floor(num/90) != 0) {
    roman += "XC".repeat(Math.floor(num/90))
    num -= Math.floor(num/90)*90;
  }

  if(Math.floor(num/50) != 0) {
    roman += "L".repeat(Math.floor(num/50))
    num -= Math.floor(num/50)*50;
  }

  if(Math.floor(num/40) != 0) {
    roman += "XL".repeat(Math.floor(num/40))
    num -= Math.floor(num/40)*40;
  }

  if(Math.floor(num/10) != 0) {
    roman += "X".repeat(Math.floor(num/10))
    num -= Math.floor(num/10)*10;
  }

  if(Math.floor(num/9) != 0) {
    roman += "IX".repeat(Math.floor(num/9))
    num -= Math.floor(num/9)*9;
  }

  if(Math.floor(num/5) != 0) {
    roman += "V".repeat(Math.floor(num/5))
    num -= Math.floor(num/5)*5;
  }

  if(Math.floor(num/4) != 0) {
    roman += "IV".repeat(Math.floor(num/4))
    num -= Math.floor(num/4)*4;
  }

  if(Math.floor(num/1) != 0) {
    roman += "I".repeat(Math.floor(num/1))
    num -= Math.floor(num/1)*1;
  }

  return roman;
}
