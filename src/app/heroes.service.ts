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

    this.messagesService.add('HeroService: Obtendo Lista de Heróis!')
    return heroes;
  }
}
