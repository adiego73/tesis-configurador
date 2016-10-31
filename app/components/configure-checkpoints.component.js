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
const core_1 = require("@angular/core");
const router_1 = require('@angular/router');
const Checkpoint_1 = require("../model/Checkpoint");
const MissionConfiguration_1 = require("../model/MissionConfiguration");
let ConfigureCheckpointsComponent = class ConfigureCheckpointsComponent {
    constructor(route) {
        this.route = route;
        this.configuration = new MissionConfiguration_1.MissionConfiguration();
        route.params.subscribe(params => {
            for (var a = 0; a < parseInt(params['amount']); a++) {
                this.configuration.checkpoints.push(new Checkpoint_1.Checkpoint());
            }
        });
    }
    getConfigurationString() {
        return JSON.stringify(this.configuration);
    }
};
ConfigureCheckpointsComponent = __decorate([
    core_1.Component({
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
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute])
], ConfigureCheckpointsComponent);
exports.ConfigureCheckpointsComponent = ConfigureCheckpointsComponent;
//# sourceMappingURL=configure-checkpoints.component.js.map