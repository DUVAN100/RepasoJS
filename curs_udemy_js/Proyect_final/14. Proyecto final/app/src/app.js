import Board from "./board";
import Card from "./card";
import Kanban from "./kanban"
//creamos una instacia de kanban
const kanban = new Kanban();
//? Creo algunas de las carpetas
const card01  = new Card('Tarea 1');
const card02  = new Card('Tarea 2');
const card03  = new Card('Tarea 3');
const card04  = new Card('Tarea 4');
const card05  = new Card('Tarea 5');
const card06  = new Card('Tarea 6');
//? Creo los tableros
const board01 = new Board('TODO', [card01,card02])
const board02 = new Board('TODO', [card03,card04])
const board03 = new Board('TODO', [card05,card06])
kanban.add(board01);
kanban.add(board02); 
kanban.add(board03);
console.log(kanban);