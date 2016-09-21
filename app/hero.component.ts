/**
 * Created by tmq on 21/09/2016.
 */

import {Component, OnInit} from "@angular/core";

@Component ({
    selector: 'my-heroes',
    template: `
        <h2>Heroes component</h2>
    `
})

export class HeroComponent implements OnInit{
    ngOnInit(): void {
    }

}
