function checkCashRegister(price, cash, cid) {

  let result = {
    "status": "OPEN",
    "change": []
  }

  let change = cash * 100 - price * 100;
  let dictionary = Object.assign({}, ...cid.map((item,y) => ({[item[0]]: item[1]})));
  let total = 0;

  for(let key in dictionary){
    total += dictionary[key]*100;
  }
  
  if(total-change === 0){
    result["status"] = "CLOSED";
    result["change"] = [...cid];
    return result;
  }

  if((Math.floor(change/10000) != 0) && change > dictionary["ONE HUNDRED"]) {

    if(dictionary["ONE HUNDRED"] * 100 < change){
      result["change"].push(["ONE HUNDRED", dictionary["ONE HUNDRED"]]);
      change = change - (dictionary["ONE HUDRED"] * 100);
    }
    else {
      result["change"].push(["ONE HUNDRED", Math.floor(change/10000) * 100]);
      change = change - (100 * Math.floor(change/10000) * 100);
    }
  }

  if((Math.floor(change/2000) != 0) && change > dictionary["TWENTY"]) {
    
    if(dictionary["TWENTY"] * 100 < change){
      result["change"].push(["TWENTY", dictionary["TWENTY"]]);
      change = change - (dictionary["TWENTY"] * 100);
    }
    else {
      result["change"].push(["TWENTY", Math.floor(change/2000) * 20]);
      change = change - (20 * Math.floor(change/2000) * 100);
    }
  }

  if((Math.floor(change/1000) != 0) && change > dictionary["TEN"]) {

    if(dictionary["TEN"] * 100 < change){
      result["change"].push(["TEN", dictionary["TEN"]]);
      change = change - (dictionary["TEN"] * 100);
    }
    else {
      result["change"].push(["TEN", Math.floor(change/1000) * 10]);
      change = change - (10 * Math.floor(change/1000) * 100);
    }
  }

  if((Math.floor(change/500) != 0) && change > dictionary["FIVE"]) {

    if(dictionary["FIVE"] * 100 < change){
      result["change"].push(["FIVE", dictionary["FIVE"]]);
      change = change - (dictionary["FIVE"] * 100);
      
    }
    else {
      result["change"].push(["FIVE", Math.floor(change/500) * 5]);
      change = change - (5 * Math.floor(change/500) * 100);
    }
  }

  if((Math.floor(change/100) != 0) && change > dictionary["ONE"]) {

    if(dictionary["ONE"] * 100 < change){
      result["change"].push(["ONE", dictionary["ONE"]]);
      change = change - (dictionary["ONE"]  * 100);
    }
    else {
      result["change"].push(["ONE", Math.floor(change/100) * 1]);
      change = change - (1 * Math.floor(change/100) * 100);
    }   
  }

  if((Math.floor(change/25) != 0) && change > dictionary["QUARTER"]) {

    if(dictionary["QUARTER"] * 100 < change){
      result["change"].push(["QUARTER", dictionary["QUARTER"]]);
      change = change - (dictionary["QUARTER"]  * 100);
    }
    else {
      result["change"].push(["QUARTER", Math.floor(change/25) * 0.25]);
      change = change - (0.25 * Math.floor(change/25) * 100);
    }
  }

  if((Math.floor(change/10) != 0) && change > dictionary["DIME"]) {

    if(dictionary["DIME"] * 100 < change){
      result["change"].push(["DIME", dictionary["DIME"]]);
      change = change - (dictionary["DIME"]  * 100);
    }
    else {
      result["change"].push(["DIME", Math.floor(change/10) * 0.10]);
      change = change - (0.10 * Math.floor(change/10) * 100);
    }
  }

  if((Math.floor(change/5) != 0) && change > dictionary["NICKEL"]) {

    if(dictionary["NICKEL"] * 100 < change){
      result["change"].push(["NICKEL", dictionary["NICKEL"]]);
      change = change - (dictionary["NICKEL"]  * 100);
    }
    else {
      result["change"].push(["NICKEL", Math.floor(change/5) * 0.05]);
      change = change - (0.05 * Math.floor(change/5) * 100);
    }   
  }

  if((Math.floor(change/1) != 0) && change > dictionary["PENNY"]) {

     if(dictionary["PENNY"] * 100 < change){
      result["change"].push(["PENNY", dictionary["PENNY"]]);
    }
    else {
      result["change"].push(["PENNY", Math.floor(change/1) * 0.01]);
    }
  }

  let sum = 0;

  for(let key in result["change"]){
    sum += (result["change"][key][1]) * 100;
  }

  if(sum < change){
    result["status"] = "INSUFFICIENT_FUNDS";
    result["change"] = [];
  }

  return result;
}
