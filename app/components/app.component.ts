import { Component } from '@angular/core';
import {MisionService} from "../services/mision.service";

@Component({
    selector: 'my-app',
    providers: [MisionService],
    template: `<h1>Mision:</h1>
                <div>
                    <h3>{{mision.title}}</h3>
                    <article>
                        {{mision.text}}
                    </article>
                </div>
                <div>
                    <button>Next >></button>
                </div>
`
})
export class AppComponent {
    private mision:any;

    constructor(private _misionService:MisionService)
    {
        this.mision = _misionService.getRandomMision();
    }

}