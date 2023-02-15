var namePIlot = "ARQ2555:Duvan Vivas";
const cutName = namePIlot => namePIlot.split(':')[1];
console.log(`The name pilot is ${cutName(namePIlot)}`);