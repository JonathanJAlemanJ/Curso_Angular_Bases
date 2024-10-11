import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'iroman';
  public age: number = 45;

  //* One way data binding (enlazado de una sola via)
  /**
   * Es una conexion entre el documento html y el .ts, dicha conexion puede ser de una via o de dos,
   * es decir, que se puede hacer que solo se puedan modificar datos mediante el 'ts' o incluso
   * modificarlos desde el html y verlo reflejados en el ts de igual manera.
   * Sin embargo esta ultima puede llegar a causar conflicto al momento de realizar la modificacion
   * , ya que, se puede realizar un ciclo infinito al momento de realizar la modificacion
   *
   */


  //* Getters: una funcion (metodo) que actua como una propiedad
  get capilizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${this.age}`;
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name='iroman';
    this.age=45;

    /* Edita la informacion de que muestra en el html directamente
    por lo que los cambios realizados en las variables realizados
    anteriormente puede que no sean visubles para el usuario.
    Esto no es recomendable ya que justamente para angular no son
    detectados */
    document.querySelectorAll('h1')!.forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>'
    });
  }

}
