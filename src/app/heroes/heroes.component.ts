import {Component, OnInit} from '@angular/core';
import {Hero} from "../interfaces/hero";
import {HEROES} from "../Mocks/mock-heroes";
import {HeroService} from "../hero-service/hero.service";
import {MessageService} from "../message-service/message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = []; //Instead of using a data array in the file, we use a data mock and import it

                            // hero: Hero = {
                            //   id: 1,
                            //   name: 'Windstorm'
                            // };
                            //Instead of using data directly we use service (instead of HEROES we use HeroService)
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) {
  }

  ngOnInit(){
    this.getHeroes()
  }

  showDetails(hero: Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
  getHeroes(){
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
