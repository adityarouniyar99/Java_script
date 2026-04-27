//======== FOR LOOP ==========

//=======count from 1 to 5 =======;

// for(let i=1;i<=5;i++){
//     console.log("Aditya Kumar Rouniyar ");
// }

//=======sum of 1 to 5 ==========;

// let sum = 0;
// for(let i=0;i<=5;i++){
//     sum += i;
// }
// console.log("sum is = ",sum);


// ========= while loop =============;

// count the number from 1 to 5 ===;

// let i=0;
// while(i<=5){
//     console.log(i);
//     i++;    
// }


// sum of nth number using while loop ==;

// let sum = 0;
// let i=0,n=5;
// while(i<=n){
//     sum = sum + i;
//     i++;
// }
// console.log("sum is ",sum);

// ===== sum of digit's is =====;

// let sum=0,n=1234;
// while(n>0){
//     let digit = n % 10;
//     sum = sum + digit;
//     n = Math.floor(n / 10);
// }
// console.log("sum of digits is ",sum);


// ========= Do.......While Loop ==========;

// let i=20;
// do{
//     console.log("Aditya");
//     i++;
// }while(i<=25);

// ======= FOR-OF LOOP =======;

// program to check vowels and consonants.

// let str = "aditya kumar";
// let count_vowel = 0,count_cons=0;
// for(let i of str){
//     if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u" || i=="A" || i=="E" || i=="I" || i=="O" || i=="U" ){
//         count_vowel++;
//     }
//     else{
//         count_cons++;
//     }
// }
// console.log(`Vowels in str is ${count_vowel}\nConsonants in str is ${count_cons}`);

// ============ FOR-IN LOOP ============;
// Here this loop is used for objects.

// let student = {
//     name : "Aditya",
//     age : 25,
//     cgpa : 9.10,
//     ispass : true
// };

// for(let key in student){
//     console.log("key = ",student[key]);
// }

//====== write a program to print all even numbers from 0 to 100 =======;

// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(`${i}`);
//     }
// }


//=> create a game where you start with any random number. Ask the user to keep guessing untill the user enters correct value.

// let gamenum = "25";

// let usernum = prompt("Enter the guess number : ");

// while(usernum != gamenum){
//     let usernum = prompt("you entered wrong number, guess number again : ");
// }

// console.log("Congratulations, you entered the right number.")
