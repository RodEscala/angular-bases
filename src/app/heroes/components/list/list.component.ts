import { Component } from '@angular/core';

@Component({
  // se le da un selector personalizado para que se entienda mejor
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames : string[] = ['Spiderman','Iron-man','Hulk','Thor']
  public deletedHero?:string;

  //Borra el ultimo elemento de la lista
  removeLastHero():void{

    // this.deletedHero = this.heroNames.pop() || 'Ya no queda nada mas que borrar';

    this.deletedHero = this.heroNames.pop() ;

  }
}
