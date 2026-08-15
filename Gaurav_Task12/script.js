let p = 20000;
let R = 10;
let T = 5;
let N = 12; 

let A = p * Math.pow((1 + (R / (N * 100))), (N * T));

console.log("The compound amount after " + T + " years is: " + A)


