import { Component } from '@angular/core';
import {MissionService} from "../services/mission.service.ts";
import {MissionConfiguration} from "../model/MissionConfiguration";
import {Mission} from "../model/Mission";

@Component({
    selector: 'my-app',
    template: ` <router-outlet></router-outlet>`
})
export class AppComponent {
    
}