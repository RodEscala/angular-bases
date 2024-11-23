import { NgModule } from "@angular/core";
import { CounterComponents } from "./components/counter/counter.component";


// De esta forma se crea un modulo
// el cual contendra CounterComponents
// si hubieran mas perfectamente se pueden agregar
// Ngmodule combierte a mi clase CounterModule
// en un modulo
@NgModule({
  //Se declara que componente estara dentro de mi modulo
  declarations:[
    CounterComponents
  ],
  // aca se le dice que se podra exportar,
  //por lo cual se podra ocupar fuera de bases/app/Counter
  exports:[
    CounterComponents
  ]
})

export class CounterModule{

}
