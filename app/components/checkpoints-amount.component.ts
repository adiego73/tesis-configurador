import {Component} from "@angular/core"

@Component({
    selector:"",
    template:`
        <div>
            <label>Cantidad de destinos</label>
             <input min="0" type="number" [(ngModel)]="amount"/>
        </div>
        <div>
            <button [routerLink]="['/']"><< Atrás</button>
            <button [disabled]="amount <= 0" [routerLink]="['/chekpoints-config', amount]">Siguiente >> {{amount}}</button>
        </div>
    `
})
export class CheckpointsAmountComponent{
    amount:number = 0;

}