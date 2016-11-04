import {Component} from "@angular/core"
import {Mission} from "../model/Mission";
import {MissionService} from "../services/mission.service";

declare var selectedMission;

@Component({
    selector: "mission-comp",
    providers: [MissionService],
    template: `
    <h1>Mision:</h1>
                <div>
                    <h3>{{mission.title}}</h3>
                    <article>
                        {{mission.description}}
                    </article>
                </div>
                <div>
                    <button (click)="getRandomMission()" >Obtener Nueva Mision</button>
                    <button [routerLink]="['/chekpoints']">Siguiente >></button>
                </div>`
})
export class MissionComponent{
    private mission:Mission;

    constructor(private _misionService:MissionService)
    {
        this.mission = (selectedMission != undefined && selectedMission > -1) ? _misionService.getMission(selectedMission) : this.mission = _misionService.getRandomMission();
        selectedMission = this.mission.id;
    }

    public getRandomMission(){
        this.mission = this._misionService.getRandomMission();
        selectedMission = this.mission.id;
    }
}