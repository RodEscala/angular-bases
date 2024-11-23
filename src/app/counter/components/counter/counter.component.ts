import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-counter',
  template: `
    <h3>
      contador: {{counter  }}
    </h3>
    <!--
      se le dice cuanto tendra que incrementar,
      este metodo esta en el archivo app.components.ts
      de este componenete
    -->
    <button (click)="increaseBy(1)">+1</button>

    <button (click)="resetCounter(counter);">Reset</button>
    <button (click)="decreaseBy(-1)">-1</button>

  `
})

export class CounterComponents {

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


// import { Component } from "@angular/core";

// // esto es un decorador lo que
// // transforma mi clase en un componente, todo esto estara
// // asociado al componente, desde el html hasta el css
// @Component({
//   standalone: false,
//   // el selector es como quiero utilizar este counter en
//   // html, es buena practica llamarlo app-{nombre}
//   selector:'app-counter',

//   // al decirle template el espera que hagamos todo el template
//   // como un string de esta forma
//   template:`<h1>Hola Mundo</h1>`
// })
// export class CounterComponents{

// }
