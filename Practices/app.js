let num1= 0;
let num2 =40; 

function values(min, max) {
  return Math.floor(Math.random() * (num2 - num1) ) + num1;
}
console.log(values())
