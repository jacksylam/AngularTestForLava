import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
      //D3
  private chartData: Array<any>;

  constructor(
    private router: Router,
    private heroService: HeroService) { 

      // this.generateData = this.generateData.bind(this);
    }
  

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();

     //d3
      setTimeout(() => {
      this.generateData();

      // change the data periodically
      // setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    })
     .then( () => this.generateData());

}


  delete(hero: Hero): void {
  this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      }).then( () => this.generateData());

} 

generateData() {
    this.chartData = [];
    // for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
    //   this.chartData.push([
    //     `Index ${i}`,
    //     Math.floor(Math.random() * 100)
    //   ]);
    // }
    for (let i =0; i < this.heroes.length; i++){
      this.chartData.push([this.heroes[i].Brand, this.heroes[i].Fat]);
    }
  }
  
}
