import {Component} from "@angular/core"

@Component({
    selector:"",
    template:`
        <div>
            <label>Cantidad de destinos</label>
             <input type="number" [(ngModel)]="amount"/>
        </div>
        <div>
            <button [routerLink]="['/chekpoints-config', amount]">Siguiente >> {{amount}}</button>
        </div>
    `
})
export class CheckpointsAmountComponent{
    amount:number = 0;

}