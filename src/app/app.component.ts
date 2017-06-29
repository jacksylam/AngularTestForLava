import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Cereals</a>
      <a routerLink="/three" routerLinkActive="active">ThreeJS</a>
      <a routerLink="/unity" routerLinkActive="active">Unity</a>
      <a routerLink="/googlemap" routerLinkActive="active">Google Map</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tour of Cereals';
}
