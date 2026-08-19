
// Nullish Coalescing Operator (??) is used to assign a default value when we have a null value amul = null;
let val = amul ?? "Gokul";
console.log(val);


let api_response = null;
let responsedata = api_response ?? "No data found";
console.log(responsedata);

let api_response1 = "Data found";
let responsedata1 = api_response1 ?? "No data found";
console.log(responsedata1);