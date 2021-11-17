import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TopHeroesComponent } from './top-heroes/top-heroes.component';

const routes: Routes = [
  { path: '', redirectTo: '/top-heroes', pathMatch: 'full' },
  { path: 'top-heroes', component: TopHeroesComponent },
  { path: 'detalhe/:id', component: HeroDetailComponent },
  { path: 'heroes-list', component: HeroesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
