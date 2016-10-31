import {Checkpoint} from "./Checkpoint";

export class MissionConfiguration {
    public checkpoints:Checkpoint[];

    constructor(obj?:any) {
        this.checkpoints = obj && obj.checkpoints ? obj.checkpoints : [];
    }
}

