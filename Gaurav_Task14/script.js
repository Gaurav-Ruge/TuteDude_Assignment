console.log("Sum of First a Numbers");

let a = 10;
let sum = 0;
for(let i = 1; i <=10; i++){
    sum = sum + i;
}
console.log("Sum of first a numbers is: " + sum);

let b= 5;
console.log("Table of b");
for(let j =1; j <=10; j++){
    console.log(b*j);
}

console.log("Prime number");
let c = 15;
let isPrime = true;
if(c <= 1){
    isPrime = false;
}else{
    for(let k = 2; k <= Math.sqrt(c); k++){
        if(c % k === 0){
            isPrime = false;
            break;
        }
    }
}

if(isPrime){
    console.log(c + " is a prime number");
}else{
    console.log(c + " is not a prime number");
}

let z = 30;
console.log("Factors of z");
for(let l = 1; l <= z; l++){
    if(z % l === 0){
        console.log(l);
    }
}

console.log("Sum of all  Digits of a number");
let num = 139;
let sum1 = 0;

while(sum1 > 0){
    let digit = num % 10;
    sum1 = sum1 + digit;
    num = Math.floor(num / 10);
}
console.log("Sum of all digits of a number is: " + sum1);

console.log("Armstrong Number");
let n = 153;
let original = n;
let sum2 = 0;

while (n > 0) {
    let digit = n % 10;
    sum2 = sum2 + digit ** 3;
    n = Math.floor(n / 10);
}

if (sum2 === original) {
    console.log(original + " is an Armstrong number");
} else {
    console.log(original + " is not an Armstrong number");
}





