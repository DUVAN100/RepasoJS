let listMap = [
    {
        nombre:"Alderaan",
        latitud:2,
        longitud:2,
        oxigeno:2,
        totalAgua:500
    },
    {
        nombre:"Death Star",
        latitud:2,
        longitud:2,
        oxigeno:2,
        totalAgua:500
    },
    {
        nombre: "Yavin 4",
        latitud:2,
        longitud:2,
        oxigeno:2,
        totalAgua:500
    },
    {
        nombre:"Hoth",
        latitud:2,
        longitud:2,
        oxigeno:2,
        totalAgua:500
    },
    {
        nombre:"Dagobah",
        latitud:2,
        longitud:2,
        oxigeno:2,
        totalAgua:500
    }, 
    {
        nombre:"Cloud City of Respin",
        latitud:2,
        longitud:2,
        oxigeno:2,
        totalAgua:500
    }, 
    {
        nombre:"Forest Moon of Endor",
        latitud:2,
        longitud:2,
        oxigeno:2,
        totalAgua:500
    }, 
    {
        nombre:"Jakku",
        latitud:2,
        longitud:2,
        oxigeno:2,
        totalAgua:500
    },
    {
        nombre:"Starkiller Base",
        latitud:2,
        longitud:2,
        oxigeno:2,
        totalAgua:500
    }];

let aguaFinal =0, totalOxigeno = 0;
const findPlanets= listMap =>{
    listMap.forEach((e)=>{
        let oxigeno =0;
        aguaFinal    += e.totalAgua;
        totalOxigeno = ((oxigeno += e.oxigeno)*100);
        validation = ValidarOxigeno(e)
        if (validation != undefined)return validation 
        validate = validarAgua(e);
        if (validate != undefined)return validate
    });
    return( `The total of water is: ${aguaFinal}, The total of oxigeno is: ${totalOxigeno}`)
}

const ValidarOxigeno = evento=> {
    if (Math.sign(evento.oxigeno) == -1) return evento
}
const validarAgua=evento=>{
    if(evento.totalAgua == '' ||  evento.totalAgua == undefined) return evento
}
console.log(findPlanets(listMap))