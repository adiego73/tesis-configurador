import {RouterModule, Routes} from '@angular/router';
import {NgModule}      from '@angular/core';
import {FormsModule}   from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy, APP_BASE_HREF} from '@angular/common';

import {AppComponent}  from '../components/app.component';
import {CheckpointsAmountComponent} from "../components/checkpoints-amount.component";
import {ConfigureCheckpointsComponent} from "../components/configure-checkpoints.component";
import {MissionComponent} from "../components/mission.component";

const routes:Routes = [
    {path: '', component: MissionComponent},
    {path: 'chekpoints', component: CheckpointsAmountComponent},
    {path: 'chekpoints-config/:amount', component: ConfigureCheckpointsComponent},
];


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
    declarations: [AppComponent, CheckpointsAmountComponent, ConfigureCheckpointsComponent, MissionComponent],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: APP_BASE_HREF, useValue: '/'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}