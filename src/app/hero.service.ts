import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log = (message: string): void => {
    this.messageService.add(`HeroService: ${message}`);
  };

  getHeroes = (): Observable<Hero[]> => {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(() => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  };

  getHero = (id: number): Observable<Hero> => {
    const heroUrl = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(heroUrl).pipe(
      tap(() => this.log(`fetched hero id: ${id}`)),
      catchError(this.handleError<Hero>(`getHero id: ${id}`))
    );
  };

  updateHero = (hero: Hero): Observable<Hero> => {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(() => this.log(`Updated hero id: ${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
