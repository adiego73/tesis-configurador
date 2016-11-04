import {Injectable} from "@angular/core"
import {Mission} from "../model/Mission";

@Injectable()
export class MissionService {

    public getRandomMission():Mission {
        var id = Math.floor((Math.random() * 10) + 1);
        return new Mission({id: id, title: "mision random ID: " + id, description: "texto de mision random"});
    }

    public getMission(mission:number):Mission {
        return new Mission({id: mission, title: "mision ID " + mission, description: "texto de mision"});
    }
}
;