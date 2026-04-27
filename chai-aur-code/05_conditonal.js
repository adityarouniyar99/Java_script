// Conditional Statement

let agee = 21;
if (agee > 18) {
    console.log("You can vote");
} else {
    console.log("You can not vote");
}

console.log("\n");

let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "white";
}

console.log(color);

console.log("\n");

// Ternary Operators:

let age = 16;
let result = age >= 18 ? "adult" : "not adult";

console.log(result);

console.log("\n");

let user = 39;

if(user % 5 == 0 ){
    console.log(user,"Is Multiple of 5");
}
else{
    console.log(user,"Not.");
}


// you can take input by using syntax;

// let age = parseInt(prompt("Enter your age"));
// let str = prompt("Enter the word");
