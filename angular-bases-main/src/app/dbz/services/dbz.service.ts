import { Injectable } from '@angular/core';
import { Character } from '../interfaces/characters.interface';
import { v4 as uuid } from 'uuid'; // Funcion de generacion de UUID unico

@Injectable({providedIn: 'root'})
export class DbzService {

  constructor() { }

  public characters : Character[] = [{
    id: uuid(),
    name:'Krillin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Veggeta',
    power: 7500
  }];

  addCharacter ( character : Character) : void {
    //  this.characters.push () => Añade el elemento al final del arreglo
    // this.characters.unshift()   => Añade el elemento al inicio del arreglo

    const newCharacter : Character = {
      id: uuid(), ... character  // Asigna las propiedades del objeto anterior al nuevo
    };

    this.characters.push(newCharacter);
  }

  /*
  onDeleteCharacter ( index : number) : void {
    this.characters.splice(index,1);
  }
  */

  deleteCharacterById ( id:string ){
    this.characters = this.characters.filter ( character => character.id !== id );
  }
}
