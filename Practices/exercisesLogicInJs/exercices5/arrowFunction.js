let seller = "Duvan Vivas";
const salary = 3500000;
const comision = 1500000;
const calculateSaaryFinally=(salary,comision)=> (salary + comision)- (((salary+comision)*5)/100) 

console.log(`Mts ${seller} your salary is $${calculateSaaryFinally(salary, comision)}`)