import { Component } from '@angular/core';
import {Hero} from "../interfaces/hero";
import {HEROES} from "../Mocks/mock-heroes";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes = HEROES; //Instead of using a data array in the file, we use a data mock and import it

                            // hero: Hero = {
                            //   id: 1,
                            //   name: 'Windstorm'
                            // };

  selectedHero?: Hero;


  showDetails(hero: Hero): void{
    this.selectedHero = hero
  }
}
