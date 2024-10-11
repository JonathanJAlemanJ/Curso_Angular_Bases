import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacter } from './components/add-character/add-character.component';

@NgModule({
  declarations: [
    // Los componentes que declaremos aqui dentro estaran disponibles para dbz-module
    // Esto quiere decir que aun que mandemos a llamar el modulo en otro componente, mientras
    // seran visibles sin necesidad de declararlos antes en el componente principal
    MainPageComponent,
    ListComponent,
    AddCharacter,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent,
  ]
})
export class DbzModule { }
