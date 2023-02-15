var y = [1,2];
var x = [4,2];
const calculatDistance = (x,y)=> (Math.sqrt((Math.pow(x[1]- x[0]),2) + (Math.pow(y[1]- y[0],2)))).toFixed(2);

console.log(`The distance is  ${calculatDistance(x,y)} UA`);