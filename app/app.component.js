"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
        this.hero = {
            id: 1,
            name: 'windstorm'
        };
        this.heroes = HEROES;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    // heroes = this.heroService.getHeroes();
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    ;
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    ;
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<h1>{{title}}</h1>\n\t\t<div *ngIf=\"selectedHero\">\n\t\t  <h2>{{selectedHero.name}} details!</h2>\n\t\t</div>\n\n\t\t<ul class=\"heroes\">\n\t\t  <li *ngFor=\"let hero of heroes\" \n\t\t  [class.selected]=\"hero === selectedHero\" \n\t\t  (click)=\"onSelect(hero)\">\n\t\t    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t\t  </li>\n\t\t</ul>\n\t\t<my-hero-detail [hero]='selectedHero'></my-hero-detail>\n  \t",
            styles: ["\n\t  .selected {\n\t    background-color: #CFD8DC !important;\n\t    color: white;\n\t  }\n\t  .heroes {\n\t    margin: 0 0 2em 0;\n\t    list-style-type: none;\n\t    padding: 0;\n\t    width: 15em;\n\t  }\n\t  .heroes li {\n\t    cursor: pointer;\n\t    position: relative;\n\t    left: 0;\n\t    background-color: #EEE;\n\t    margin: .5em;\n\t    padding: .3em 0;\n\t    height: 1.6em;\n\t    border-radius: 4px;\n\t  }\n\t  .heroes li.selected:hover {\n\t    background-color: #BBD8DC !important;\n\t    color: white;\n\t  }\n\t  .heroes li:hover {\n\t    color: #607D8B;\n\t    background-color: #DDD;\n\t    left: .1em;\n\t  }\n\t  .heroes .text {\n\t    position: relative;\n\t    top: -3px;\n\t  }\n\t  .heroes .badge {\n\t    display: inline-block;\n\t    font-size: small;\n\t    color: white;\n\t    padding: 0.8em 0.7em 0 0.7em;\n\t    background-color: #607D8B;\n\t    line-height: 1em;\n\t    position: relative;\n\t    left: -1px;\n\t    top: -4px;\n\t    height: 1.8em;\n\t    margin-right: .8em;\n\t    border-radius: 4px 0 0 4px;\n\t  }\n\t"],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var HEROES = [
    { id: 11, name: 'An' },
    { id: 12, name: 'Binh' },
    { id: 13, name: 'Chi' },
    { id: 14, name: 'Dat' },
    { id: 16, name: 'Em' },
    { id: 17, name: 'Giang' }
];
//# sourceMappingURL=app.component.js.map