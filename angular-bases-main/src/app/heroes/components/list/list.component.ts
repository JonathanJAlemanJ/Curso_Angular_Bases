// Importaciones
import { Component } from '@angular/core';

// Interfaces

//COMPONENTES
@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // Variables
  public heroeNames : string [] = ['Spiderman', 'Iroman', 'Hulk', 'She Hulk', 'Thor'];
  public heroeBorrado: string | undefined = '';

  // Constructor

  // Funciones / Metodos
  removeLastHero () : void {
    this.heroeBorrado = this.heroeNames.pop(); // Elimina el ultimo elemento del arreglo y lo devuelve
    /**
     * this.heroeNames.shift(); // Elimina el primer elemento del arreglo y lo devuelve
    **/
  }

}
