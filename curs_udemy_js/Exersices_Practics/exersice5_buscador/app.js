const db = [
    'luis', 
    'maria', 
    'sergio', 
    'josue', 
    'lena',
    'marcos', 
    'omar', 
    'enrique'
];

const buscador = $('#buscador');
const sugerencias = $('#sugerencias');

buscador.addEventListener('input', e => {
    const query = e.target.value.toLowerCase().trim();

    if(query == '') mostrarSugerencias([], query);

    const res = db.filter(item => {
        if(item.indexOf(query) > -1) return item;
    });

    mostrarSugerencias(res, query);
});

function mostrarSugerencias(valores, query){
    sugerencias.innerHTML = '';
    if(query == ''){
       // console.log('sd');
        sugerencias.style.display = 'none';
        return false;
    }else{
        sugerencias.style.display = 'block';
    }
    
    valores.forEach( item => {
        const elemento = document.createElement('a');
        let texto = item.replace(query, `<strong>${query}</strong>`);
        elemento.innerHTML = texto;
        elemento.href = '#';
        sugerencias.appendChild(elemento);

        elemento.addEventListener('click', e => {
            buscador.value = e.target.textContent;
            sugerencias.innerHTML = '';
            sugerencias.style.display = 'none';
        });
    });
}



function $(selector){
    return document.querySelector(selector);
}
function $$(selector){
    return document.querySelectorAll(selector);
}


