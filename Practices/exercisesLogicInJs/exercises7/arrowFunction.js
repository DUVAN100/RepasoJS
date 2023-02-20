let array =  [-3,-1,-5,4,3,-20,46,14];
const numberClosest = array=>{
    if (array.length === 0) return 0;
    let closest = array[0];
    for(let i = 0; i < array.length;i++){
        let value = array[i];
        let number =  Math.abs(value);
        let menor = Math.abs(closest);
        if (number < menor)closest = value;
        else if (number === closest && closest < 0)closest = value;
    } 
    return closest;
}
  console.log("number closest",numberClosest(array))