import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'

import { AppComponent }   from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import {routing} from "./app.routing";
import {HeroComponent} from "./hero.component";
import {HeroService} from "./hero.service";

@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
	  routing
  ],
  declarations: [ 
  	AppComponent,
  	HeroDetailComponent,
	  HeroComponent
  	],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
