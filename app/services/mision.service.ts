import {Injectable} from "@angular/core"
import {Mission} from "../model/Mission";

@Injectable()
export class MisionService{

    public getRandomMision():Mission{
        return new Mission({title:"mision random", description: "texto de mision random"});
    }
};