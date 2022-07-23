import { generateId } from "./ids";
export default class Card {
    id; 
    title;
    constructor(title){
        this.title = title;
        this.id = generateId();
    }
    //?vamos a crear un metodo que va a regresar el html de la tageta
    getHTML(board, boardIndex, index){
        const id = `card--${this.id}`;
        const dataId = `dataid="${id}"`;
        return `<div class="card" id="${id} data-boardid="board--${board.id}" draggable="true">
                   <div class="card-wrapper">
                        <div class="title">
    
                        </div>
                        <div class="options">
                            <button class="more-options"></button>
                            <div class="submenu">
                                <ul>
                                    <li><a href="#" class="card-submenu-edit">editar</a></li>
                                    <li><a href="#" class="card-submenu-delete">eliminar</a></li>
                                </ul>
                            </div>
                        </div>  
                    </div>
                    <div class="placeholder"></div>
                </div>`;
    }

}
