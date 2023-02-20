let count = 0;
let age = 0
let ageSee = 0;
const ages = [];
let ageOlder = 0;
const generateAges = (age)=>{
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
    return(`The age older is ${ageOlder}`)


}
console.log(generateAges(age));

function getRandomIntInclusive(ageMin, ageMax) {
    ageMin = Math.ceil(ageMin);
    ageMax = Math.floor(ageMax);
    return Math.floor(Math.random() * (ageMax - ageMin + 1) + ageMin);
  }