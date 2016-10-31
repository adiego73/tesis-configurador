import {Injectable} from "@angular/core"

@Injectable()
export class MisionService{

    public getRandomMision():any{
        return {title:"mision random", "text": "texto de mision random"};
    }
};