import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

import { ThreeJSComponent } from './three-js/three-js/three-js.component';
import { UnityComponent } from './unity/unity/unity.component';
import { GoogleMapComponent } from './google-map/google-map/google-map.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'three', component: ThreeJSComponent},
  { path: 'unity', component: UnityComponent},
  {path: 'googlemap', component: GoogleMapComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
