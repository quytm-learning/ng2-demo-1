import {Routes, RouterModule} from "@angular/router";
import {HeroComponent} from "./hero.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by tmq on 21/09/2016.
 */
const appRouter: Routes = [
    {
        path: 'heroes',
        component: HeroComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);