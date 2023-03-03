
        

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
crearEstudiante("Duvan","Yesid",19,1.76,function(edad){
    if (edad<15) {
        console.log("Age: " + edad + "Your class of drive is of ")
    }else{
        console.log("su edad es " + edad + "tu clase sera manejo del sable")
    }
})
