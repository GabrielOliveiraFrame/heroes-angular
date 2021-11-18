import { Observable } from 'rxjs';
import { HeroesService } from './../heroes.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../models/hero';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // @Input()
  // hero?: Hero;

  hero?: Hero;

  constructor(private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private location: Location) { }

  ngOnInit(): void {
    this.getHeroById();
  }

  getHeroById(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.heroesService.getHeroById(id)
      .subscribe((data: Hero) => this.hero = data);
  }

  updateHero(): void {
    if (this.hero) {
      this.heroesService.updateHero(this.hero)
        .subscribe(() => this.goBack())
    }
  }

  goBack(){
    this.location.back();
  }

}
