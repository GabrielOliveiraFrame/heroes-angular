import { MessagesService } from './messages.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './models/hero';
import { HEROES } from './shared/heroes-list';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);

    this.messagesService.add('HeroesService: Obtendo Lista de Heróis!')
    return heroes;
  }

  getHeroById(id: number): Observable<Hero>{
    const hero = HEROES.find(hero => hero.id === id) as Hero;

    this.messagesService.add(`HeroesService: Obtendo heroi específico (Id: ${hero.id})`);

    return of(hero);
  }
}
