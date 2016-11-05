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
        var environmentConfig = electron.remote.getGlobal('environmentConfiguration');
        this.comments = environmentConfig.safe_spot;
        console.log(environmentConfig.safe_spot);
    }
    getConfigurationString() {
        return JSON.stringify(this.configuration);
    }
    saveFile() {
        var file = new File([JSON.stringify(this.configuration)], "rutina.json", { type: "text/json;charset=utf-8" });
        saveAs(file);
    }
    shouldBeDisabled() {
        for (var config in this.configuration.checkpoints) {
            if (this.configuration.checkpoints[config].id == 0)
                return true;
        }
        return false;
    }
};
ConfigureCheckpointsComponent = __decorate([
    core_1.Component({
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
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute])
], ConfigureCheckpointsComponent);
exports.ConfigureCheckpointsComponent = ConfigureCheckpointsComponent;
//# sourceMappingURL=configure-checkpoints.component.js.map