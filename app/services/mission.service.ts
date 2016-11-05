import {Injectable} from "@angular/core"
import {Mission} from "../model/Mission";

declare var electron;

@Injectable()
export class MissionService {
    private missions:Mission[] = [];

    constructor()
    {
        var missionConfig = electron.remote.getGlobal('missionsConfiguration');
        missionConfig.forEach((elem, index, _) => {
             this.missions.push(new Mission({id:index, title: elem.title, description: elem.description}));
        }, this);
    }

    public getRandomMission():Mission {
        return this.missions[Math.floor(Math.random()*this.missions.length)];
    }

    public getMission(mission:number):Mission {
        return this.missions[mission];
    }
}
;