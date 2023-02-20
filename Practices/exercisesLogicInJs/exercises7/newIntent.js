let array =  [-3,-4,-5,4,3,-20,46,-1];
let numero = array[0];
function cercano(array){
    let numberClosest=0
    for (let index = 0; index <= array.length; index++) {
        let value = array[index];
        console.log("value",value)
        let number =  Math.abs(value);
        let closest = Math.abs(numero);
        console.log("numero",number) 
        console.log("closest ",closest)
        if (closest < number){
            console.log("ener if")
            numberClosest = value 
            //console.log("numero menor",numero)
        }else if (number === closest && closest < 0){
            numberClosest = value;
            console.log("ener else if")
        }
    }
    return(`menor ${numberClosest}`)

    
}
  console.log(cercano(array))