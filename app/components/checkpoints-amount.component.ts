import {Component} from "@angular/core"

@Component({
    selector:"",
    template:`
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
        <div class="row footer-buttons">
            <button type="button" class="btn btn-default" [routerLink]="['/']"><< Atrás</button>
            <button type="button" class="btn btn-primary" [disabled]="amount <= 0" [routerLink]="['/chekpoints-config', amount]">Siguiente >> {{amount}}</button>
        </div>
    `
})
export class CheckpointsAmountComponent{
    amount:number = 0;

    public restoreAmount(value)
    {
        if(value == "")
            this.amount = 0;
    }
}