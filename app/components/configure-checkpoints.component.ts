import {Component, Output, EventEmitter} from "@angular/core"
import {ActivatedRoute} from '@angular/router';
import {Checkpoint} from "../model/Checkpoint";
import {MissionConfiguration} from "../model/MissionConfiguration";

declare function saveAs(data:Blob);
declare var electron;

@Component({
    selector: "configure-checkpoints",
    template: `
<div class="title">
    Configurar destinos
</div>
<div class="description">
    Configure cada destino. Debe colocar el ID del destino, el tiempo que el robot debe permanecer sobre el destino, y la altura a la que debe sobrevolarlo.
</div>
<div class="row" *ngFor="let checkpoint of configuration.checkpoints">
              <div class="row">
                    <div class="col-sm-4"><label>ID de destino: </label></div>
                    <div class="col-sm-4">
                        <select [(ngModel)]="checkpoint.id">
                            <option *ngFor="let comment of comments" [value]="comment.Id">{{comment.Comentario}}</option>
                        </select>
                    </div>
                    <div class="col-sm-4"></div>
              </div>
              <div class="row">
                    <div class="col-sm-4"><label>Tiempo en segundos: </label></div>
                    <div class="col-sm-4"><input min="0" type="number" [(ngModel)]="checkpoint.time"/></div>
                    <div class="col-sm-4"></div>
              </div>
              <div class="row">
                    <div class="col-sm-4"><label>Altura en milímetros: </label></div>
                    <div class="col-sm-4"><input min="0" type="number" step="100" [(ngModel)]="checkpoint.altura"/></div>
                    <div class="col-sm-4"></div>
              </div>
              <hr>
</div>
<div class="row">
    <textarea readonly>{{getConfigurationString()}}</textarea>
</div>
<div class="row footer-buttons">
    <button type="button" class="btn btn-default" [routerLink]="['/chekpoints']"><< Atrás</button>
    <button type="button" class="btn btn-default" [routerLink]="['/']">Reiniciar</button>
    <button type="button" class="btn btn-primary" [disabled]="shouldBeDisabled()" (click)="saveFile()">GUARDAR</button>
</div>
`
})
export class ConfigureCheckpointsComponent {
    private configuration:MissionConfiguration;
    private comments;

    constructor(private route:ActivatedRoute) {
        this.configuration = new MissionConfiguration();
        route.params.subscribe(params => {
            for (var a = 0; a < parseInt(params['amount']); a++) {
                this.configuration.checkpoints.push(new Checkpoint());
            }
        });

        var environmentConfig = electron.remote.getGlobal('environmentConfiguration');
        this.comments = environmentConfig.safe_spot;
        console.log(environmentConfig.safe_spot);
    }

    public getConfigurationString(){
        return JSON.stringify(this.configuration);
    }

    public saveFile(){
        var file = new File([JSON.stringify(this.configuration)], "rutina.json", {type: "text/json;charset=utf-8"});
        saveAs(file);
    }

    public shouldBeDisabled()
    {
        for(var config in this.configuration.checkpoints){
            if(this.configuration.checkpoints[config].id == 0)
                return true;
        }
        return false;
    }

}