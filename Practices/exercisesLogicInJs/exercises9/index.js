
        

function crearEstudiante(nombre,planeta,edad,estatura,clasificarEstudiante) {
    setTimeout(function(){
        let estudiante={
            nombre:nombre,
            edad:edad,
            planeta:planeta,
            estatura:estatura
        }
        clasificarEstudiante(estudiante.edad) 
    },5000)
}
crearEstudiante("pedro","marte",18,1.86,function(edad){
    if (edad<15) {
        console.log("su edad es " + edad + "tu clase sera manejo de la fuerza")
    }else{
        console.log("su edad es " + edad + "tu clase sera manejo del sable")
    }
})
