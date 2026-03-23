let score =false; 
console.log(typeof(score));

// here we are converting string data type in number data type.
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber); 
// Score => after conversion output.
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// number to boolean 
let isLoggedIn = 1
let val = Boolean(isLoggedIn);
console.log(val);

// 1 => true ; 0 => false,
// "" => false;
// "aditya" => true;

let num = 12344;
let str = String(num);
console.log(typeof(str));
console.log(typeof num);
console.log(str);

//****************OPERATIONS *************** */

console.log(2+2);   // addition
console.log(2-2);   // substraction
console.log(2/2);   // divide
console.log(2%5);   //reminder
console.log(2*2);   // multiply
console.log(2**3); // power of 2^3