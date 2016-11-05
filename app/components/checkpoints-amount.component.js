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
let CheckpointsAmountComponent = class CheckpointsAmountComponent {
    constructor() {
        this.amount = 0;
    }
    restoreAmount(value) {
        if (value == "")
            this.amount = 0;
    }
};
CheckpointsAmountComponent = __decorate([
    core_1.Component({
        selector: "",
        template: `
        <div class="title">
            Cantidad de destinos
        </div>
        <div class="description">
            Seleccione la cantidad de destinos. Debe ser mayor a 0.
        </div>
        <div class="row">
            <div class="col-sm-4"><label>Cantidad de destinos</label></div>
            <div class="col-sm-4"><input min="0" type="number" [(ngModel)]="amount" (blur)="restoreAmount($event.target.value)"/></div>
            <div class="col-sm-4"></div>
        </div>
        <div class="row">
            <button type="button" class="btn btn-default" [routerLink]="['/']"><< Atrás</button>
            <button type="button" class="btn btn-primary" [disabled]="amount <= 0" [routerLink]="['/chekpoints-config', amount]">Siguiente >> {{amount}}</button>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [])
], CheckpointsAmountComponent);
exports.CheckpointsAmountComponent = CheckpointsAmountComponent;
//# sourceMappingURL=checkpoints-amount.component.js.map