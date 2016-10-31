import {Component, Output, EventEmitter} from "@angular/core"
import {ActivatedRoute} from '@angular/router';
import {Checkpoint} from "../model/Checkpoint";
import {MissionConfiguration} from "../model/MissionConfiguration";

@Component({
    selector: "configure-checkpoints",
    template: `
<div *ngFor="let checkpoint of configuration.checkpoints">
        <div>
              <label>ID de destino: </label> <input type="number" [(ngModel)]="checkpoint.id"/> <br/>
              <label>Tiempo en segundos: </label> <input type="number" [(ngModel)]="checkpoint.time"/> <br/>
              <label>Altura en decimetros: </label> <input type="number" [(ngModel)]="checkpoint.altura"/>
              <br/>
              <hr>
        </div>
</div>
<div>
    <textarea readonly>{{getConfigurationString()}}</textarea>
</div>
    `
})
export class ConfigureCheckpointsComponent {
    private configuration:MissionConfiguration;

    constructor(private route:ActivatedRoute) {
        this.configuration = new MissionConfiguration();
        route.params.subscribe(params => {
            for (var a = 0; a < parseInt(params['amount']); a++) {
                this.configuration.checkpoints.push(new Checkpoint());
            }
        });
    }

    public getConfigurationString(){
        return JSON.stringify(this.configuration);
    }

}