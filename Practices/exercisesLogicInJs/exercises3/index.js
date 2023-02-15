let temperature_max = 1.1;
let temperature_min = 1.2;
function calculte_temperture_medium(temperature_max,temperature_min) {
    return temperature_max+ temperature_min/2
}
console.log(`The temperature medium is ${calculte_temperture_medium(temperature_max,temperature_min)}°`);