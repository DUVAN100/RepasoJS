const swords = [2,4,-8,5,-6];
const find_swords_bad=swords=>{
    let swords_bad = 0;
    swords.forEach(i=>{
            if(Math.sign(i)== -1){
                swords_bad+=1
            }
        }
    )
    return swords_bad
}
console.log(`The swords bad whit energy megative is of: ${find_swords_bad(swords)}`)