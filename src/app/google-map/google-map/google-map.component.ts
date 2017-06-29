import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit  {
title: string = 'Google Maps';
  lat: number = 21.4389;
  lng: number = -158.0001;
  constructor() { 

 
  }

  ngOnInit() {

  }    
}
