const mispromesas = new Promise((resolve, reject) => {
    const tiemporejected = Math.floor(Math.random() * 10000) + 1000;
    const tiemporesolved = Math.floor(Math.random() * 10000) + 1000;

    console.log("tiemporejected", tiemporejected);
    console.log("tiemporesolve", tiemporesolved);

    setTimeout(() => {
      reject(`la promesa ${indice}fallo`);
    }, tiemporesolved);

    setTimeout(() => {
      resolve(`promesa ${indice} satisfecha`);
    }, tiemporejected);
  });


mispromesas.then(
  (respuesta) => console.log(respuesta),
  (razon) => console.log(razon)
);
