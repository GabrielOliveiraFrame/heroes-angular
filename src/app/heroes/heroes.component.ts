import { Component, OnInit } from '@angular/core';
import { Heroe } from '../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Heroe = {
    id: 1,
    name: 'Spider-Man'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
