import {Component} from "@angular/core"
import {Mission} from "../model/Mission";
import {MissionService} from "../services/mission.service";

declare var selectedMission;
declare var electron;

@Component({
    selector: "mission-comp",
    providers: [MissionService],
    template: `
                <div class="row">
                    <h1>Herramienta de configuración de misiones</h1>
                </div>
                <div class="row">
                    {{mission.title}}
                </div>
                <div class="row mission-description">
                    {{mission.description}}
                </div>
                <div class="alert error" *ngIf="errorMessage != ''">
                    {{errorMessage}}
                </div>
                <div class="row footer-buttons">
                    <button type="button" class="btn btn-default" (click)="getRandomMission()" >Obtener Nueva Mision</button>
                    <button type="button" class="btn btn-primary" [disabled]="errorMessage != ''" [routerLink]="['/chekpoints']">Siguiente >></button>
                </div>`
})
export class MissionComponent{
    private mission:Mission;
    public errorMessage:string = "";

    constructor(private _misionService:MissionService)
    {
        if(!electron.remote.getGlobal('environmentConfiguration'))
        {
            this.errorMessage = "No se pudo obtener la configuración del environment (environment.json)";
        }

        this.mission = (selectedMission != undefined && selectedMission > -1) ? _misionService.getMission(selectedMission) : this.mission = _misionService.getRandomMission();
        selectedMission = this.mission.id;
    }

    public getRandomMission(){
        this.mission = this._misionService.getRandomMission();
        selectedMission = this.mission.id;
    }
}