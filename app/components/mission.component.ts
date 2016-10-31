import {Component} from "@angular/core"
import {Mission} from "../model/Mission";
import {MisionService} from "../services/mision.service";

@Component({
    selector: "mission-comp",
    providers: [MisionService],
    template: `
    <h1>Mision:</h1>
                <div>
                    <h3>{{mission.title}}</h3>
                    <article>
                        {{mission.description}}
                    </article>
                </div>
                <div>
                    <button [routerLink]="['/chekpoints']">Siguiente >></button>
                </div>`
})
export class MissionComponent{
    private mission:Mission;

    constructor(private _misionService:MisionService)
    {
        this.mission = _misionService.getRandomMision();
    }
}