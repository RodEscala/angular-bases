
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
//Recordar que no es mas que una sola clase con un decorador
export class HeroComponent {

  public name:string = 'Iron-Man';
  public age:number = 45;

  // el get es una propiedad pero realmente funciona como
  // un metodo.
  // La diferencia es que se puede acceder a ella
  // sin la necesidad de ocupar un ()
  // ejm: name.capitalizedname
  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `Nombre: ${this.name} - edad:${this.age}`;
  }


  changeHero():void{
    this.name = 'Spiderman';
  }


  changeEdad():void{
    this.age = 25;

  }


  resetForm():void{
    this.name = 'Iron-Man';
    this.age = 45;
  }




}
