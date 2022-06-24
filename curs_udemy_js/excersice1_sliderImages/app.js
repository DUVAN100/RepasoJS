const Back = document.querySelector('#Back');
const Next = document.querySelector('#Next');
const items = document.querySelectorAll('#slider-container .item');
let index=0;
const total = items.length;
mostrarItems(index);
//eEVENTO CLICK
Back.addEventListener('click', e =>{
    if(index >0){
        index--;
         ocultarItem();
         mostrarItems(index);
    }
});
Next.addEventListener('click', e =>{
    if(index < total -1){
        index++;
        ocultarItem();
        mostrarItems(index);
    } 
});

//mostrar items
function mostrarItems(index){
    items[index].classList.add('item-active')
};
//ocultar Items
function ocultarItem(){
    items.forEach(item =>{
        item.classList.remove('item-active');
    });
};

