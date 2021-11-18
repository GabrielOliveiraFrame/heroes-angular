import { MessagesService } from './messages.service';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Hero } from './models/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { HEROES } from './shared/heroes-list';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url =  "http://localhost:3000/heroes";

  httpConfig ={
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private messagesService: MessagesService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.url).pipe(
      tap(() => this.log(`Obtendo Lista de Heróis!`)),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHeroById(id: number): Observable<Hero>{
    return this.http.get<Hero>(`${this.url}/${id}`).pipe(
      tap(() => this.log(`Obtendo Herói Específico (Id: ${id})`)),
      catchError(this.handleError<Hero>('getHeroById'))
    );
  }

  updateHero(hero: Hero): Observable<Hero>{
    return this.http.put<Hero>(`${this.url}/${hero.id}`, hero, this.httpConfig).pipe(
      tap(() => this.log(`Atualizando Herói (Id: ${hero.id})`)),
      catchError(this.handleError<Hero>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.url, hero, this.httpConfig).pipe(
      tap(() => this.log(`Criando Herói (Nome: ${hero.name})`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(id: number): Observable<Hero>{
    return this.http.delete<Hero>(`${this.url}/${id}`, this.httpConfig).pipe(
      tap(() => this.log(`Deletando Herói (Id: ${id})`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.url}?name=${term}`).pipe(
      tap(arr => arr.length ?
         this.log(`Encontramos Heróis com o nome "${term}"`) :
         this.log(`Não Encontramos Heróis com o nome "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  private log(message: string) {
    this.messagesService.add(`HeroesService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      console.log(result);

      return of(result as T);
    }
  };
}
