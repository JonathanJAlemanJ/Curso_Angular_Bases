// IMPORTS
import { Component } from "@angular/core";

// CLASES
@Component(
  {
    selector: 'app-counter',
    //* Al momento de declarar el templete se puede realizar de formas, usando el templete de la siguiente manera:
    //* en la cual simplemente ponemos el codigo HTML dentro del mismo ".ts"; o bien, usando templeteUrl (el cual es la
    //* forma en la que se declara cuando se va a poner el codigo de HTML dentro de un archivo propio)
    //* Es recomendable que cuando nadamas se van a tener un par de lineas de codigo se ocupe templete y que cuando ya sobre pasa entre
    //* 5 y 10 se ponga en un archivo independiente
    template: `
    <h3>Counter encapsulado: {{ counter }} </h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>
    `}
)
export class CounterComponent {
  counter=10;

  increaseBy(value: number):void{
    this.counter += value;
  }

  resetCounter():void{
    this.counter=10;
  }
}
