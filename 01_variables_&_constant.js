const accountId = 144553;
let accountEmail = "aditya@gmail.com";
var accountPassword = "123456";
accountCity = "Jaipur"; //here we can declear without var & const but it is very wrong practice.

let accountState;

// accountId = 2; //here this can not be changes beacause it is decleared as constant in above.
accountEmail="adityarouniyar99@gmail.com";
accountPassword="212121";
accountCity="Chandigardh";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);

/*
prefer not use var 
because of issue in block scope and functional scope.
*/