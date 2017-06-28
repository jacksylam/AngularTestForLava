import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
 private heroesUrl = 'api/heroes';  // URL to web api
 
constructor(private http: Http) { }
 
getHeroes(): Promise<Hero[]> {
  return this.http.get(this.heroesUrl)
             .toPromise()
             .then(response => response.json().data as Hero[])
             .catch(this.handleError);
}
 
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

  getHero(id: number): Promise<Hero> {
     const url = `${this.heroesUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Hero)
    .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});

update(hero: Hero): Promise<Hero> {
  const url = `${this.heroesUrl}/${hero.id}`;
  return this.http
    .put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
}

create(name: string): Promise<Hero> {
  let Energy = "K";
  let Protein = Math.floor(Math.random() * 100);
  let Fat = Math.floor(Math.random() * 10);
  let Na = Math.floor(Math.random() * 10);
  let Fiber = Math.floor(Math.random() * 1000);
  let Carbs = Math.floor(Math.random() * 10);
  let Sugar = Math.floor(Math.random() * 10);
  let K = Math.floor(Math.random() *10);
  let Vit = Math.floor(Math.random() * 1000);
  let Score = Math.floor(Math.random() * 100);
  return this.http
    .post(this.heroesUrl, JSON.stringify({Brand: name, Protein: Protein, Fat:Fat, Na:Na, Fiber:Fiber, Carbs:Carbs, Sugar:Sugar, K:K, Vit:Vit, Score:Score}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Hero)
    .catch(this.handleError);
}

delete(id: number): Promise<void> {
  const url = `${this.heroesUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
}
