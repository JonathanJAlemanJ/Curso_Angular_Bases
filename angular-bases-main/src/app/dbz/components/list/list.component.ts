import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  /*
    Forma de indicarle a angular que recibiremos la informacion de otro componente.

    es comunicacion unilateral (Es decir que solo se puede recibir informacion con esa variable)
  */
  @Input()
  public characterList : Character[] = [{ // Asignacion de informacion en caso de que NO se le asigne ninguna informacion nueva
    name: 'Trunks',
    power: 10
  }]

  /*
    ID para emitir el personaje que se desea eliminar
  */
  @Output ()
  public onDelete: EventEmitter<string> = new EventEmitter();


  /*
  onDeleteCharacter ( id?:string ) : void {
    if(!id) return //// SI NO EXISTE
    this.onDelete.emit(id);
  }
  */

  onDeleteCharacter ( id:number ) : void {
    const idDelete = this.characterList[id].id
    this.onDelete.emit(idDelete);
  }
}
