import { MessagesService } from './../messages.service';
import { HeroesService } from './../heroes.service';
// import { HEROES } from './../shared/heroes-list';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // hero: Hero = {
  //   id: 1,
  //   name: 'Homem-Aranha'
  // };

  // heroes = HEROES;

  heroes?: Hero[];

  selectedHero?: Hero;

  constructor(private heroesService: HeroesService,
    private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onClickHero(clickedHero: Hero){
    this.selectedHero = clickedHero;

    this.messagesService.add(`HeroesComponent: ${this.selectedHero.name} foi selecionado!`)
  }

  getHeroes() {
    this.heroesService.getHeroes()
    .subscribe(data => this.heroes = data);
  }

}
