let count = 0;
let ageSee = 0;
let age = 0;
const ages = [];
let ageOlder = 0;
function generateAges(ageOlder){
    for (let index = 0; index < 20; index++) {
        value =getRandomIntInclusive(1,100)
        ages.push(value);
    }
    console.log("AGES", ages);
    ages.forEach(element => {
        if(element > ageOlder){
            ageOlder = element
        }
    });    
}
console.log(generateAges(ageOlder));
function getRandomIntInclusive(ageMin, ageMax) {
    ageMin = Math.ceil(ageMin);
    ageMax = Math.floor(ageMax);
    return Math.floor(Math.random() * (ageMax - ageMin + 1) + ageMin);
  }