let array =  [-3,-4,-5,4,3,-20,46,-1];
function numberClosest(array){
    if (array.length === 0) return 0;
    let closest = array[0];
    console.log(closest)
    for(let i = 0; i < array.length;i++){
        let value = array[i];
        let number =  Math.abs(value);
        let closest = Math.abs(closest);
        if (number < closest){
            closest = value;
        } 
        else if (number === closest && closest < 0){
            closest = value;
        }
    }
    return closest;
}
  console.log(numberClosest(array))