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
const mission_service_1 = require("../services/mission.service");
let MissionComponent = class MissionComponent {
    constructor(_misionService) {
        this._misionService = _misionService;
        this.errorMessage = "";
        if (!electron.remote.getGlobal('environmentConfiguration')) {
            this.errorMessage = "No se pudo obtener la configuración del environment (environment.json)";
        }
        this.mission = (selectedMission != undefined && selectedMission > -1) ? _misionService.getMission(selectedMission) : this.mission = _misionService.getRandomMission();
        selectedMission = this.mission.id;
    }
    getRandomMission() {
        this.mission = this._misionService.getRandomMission();
        selectedMission = this.mission.id;
    }
};
MissionComponent = __decorate([
    core_1.Component({
        selector: "mission-comp",
        providers: [mission_service_1.MissionService],
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
    }), 
    __metadata('design:paramtypes', [mission_service_1.MissionService])
], MissionComponent);
exports.MissionComponent = MissionComponent;
//# sourceMappingURL=mission.component.js.map