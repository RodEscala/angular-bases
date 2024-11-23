import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common"

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";



@NgModule({
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  imports:[
    // se importa CommonModule por que
    // si no los ngIf,ngFor y ngSwitch no se
    // mostraran
    CommonModule
  ],
})
export class HeroesModule{

}











