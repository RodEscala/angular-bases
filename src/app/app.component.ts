import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // este titulo se puede ocupar directamente desde el html
  // claro que estos html se podran ocupar asi siempre
  // que esten en el mismo componente
  public title:string = 'Hola Mundo';

  public counter:number = 10

  //metodo
  increaseBy(value:number):void{
    this.counter = this.counter + 1;
  }

  decreaseBy(value:number):void{
    this.counter = this.counter -1;
  }

  resetCounter(value:number){
    this.counter = 10;
  }

}
