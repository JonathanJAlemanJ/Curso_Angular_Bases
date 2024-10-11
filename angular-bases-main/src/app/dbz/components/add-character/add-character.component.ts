import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})

export class AddCharacter {

  /**
   * Indicamos a angular que se mandara informacion a otro componente mediante comunicacion unilateral
   */
  @Output ()
  onNewCharacter : EventEmitter <Character> = new EventEmitter;

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter () : void {

    if ( this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character);

    this.character= {
     name: '',
     power: 0
    }
  }

}
