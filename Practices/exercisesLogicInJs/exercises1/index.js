var y = [1,2];
var x = [4,2];

function calculateDistance(x, y) {
    result = (Math.sqrt((Math.pow(x[1]- x[0]),2) + (Math.pow(y[1]- y[0],2)))).toFixed(2);
    console.log(`The distance is  ${result} UA`);
    return result;
}
calculateDistance(x,y)
