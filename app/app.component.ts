import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';

@Component({
	selector: 'my-app',
	template:`
		<h1>{{title}}</h1>
		<div *ngIf="selectedHero">
		  <h2>{{selectedHero.name}} details!</h2>
		</div>

		<ul class="heroes">
		  <li *ngFor="let hero of heroes" 
		  [class.selected]="hero === selectedHero" 
		  (click)="onSelect(hero)">
		    <span class="badge">{{hero.id}}</span> {{hero.name}}
		  </li>
		</ul>
		<my-hero-detail [hero]='selectedHero'></my-hero-detail>
  	`,

  	styles: [`
	  .selected {
	    background-color: #CFD8DC !important;
	    color: white;
	  }
	  .heroes {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 15em;
	  }
	  .heroes li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: .5em;
	    padding: .3em 0;
	    height: 1.6em;
	    border-radius: 4px;
	  }
	  .heroes li.selected:hover {
	    background-color: #BBD8DC !important;
	    color: white;
	  }
	  .heroes li:hover {
	    color: #607D8B;
	    background-color: #DDD;
	    left: .1em;
	  }
	  .heroes .text {
	    position: relative;
	    top: -3px;
	  }
	  .heroes .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: .8em;
	    border-radius: 4px 0 0 4px;
	  }
	`],

	providers: [HeroService]

})

export class AppComponent implements OnInit{
	constructor(private heroService: HeroService){ };
	ngOnInit(): void {
		this.getHeroes();
	}
	title = 'Tour of Heroes';
	hero: Hero = {
		id: 1,
		name: 'windstorm'
	};
	heroes = HEROES;
	// heroes = this.heroService.getHeroes();
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	};
	selectedHero: Hero;
	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	};
}

const HEROES: Hero[] = [
	{ id: 11, name: 'An'},
	{ id: 12, name: 'Binh'},
	{ id: 13, name: 'Chi'},
	{ id: 14, name: 'Dat'},
	{ id: 16, name: 'Em'},
	{ id: 17, name: 'Giang'}
];