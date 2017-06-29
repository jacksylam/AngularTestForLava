import { Component, OnInit } from '@angular/core';
declare var UnityLoader: any;

@Component({
  selector: 'app-unity',
  templateUrl: './unity.component.html',
  styleUrls: ['./unity.component.css']
})
export class UnityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
         var gameInstance = UnityLoader.instantiate("gameContainer", "./assets/Build/Builds.json");

  }
}
