export class Checkpoint {
    public id:number;
    public altura:number;
    public time:number;

    constructor(obj?:any) {
        this.id = obj && obj.id ? obj.id : 0;
        this.altura = obj && obj.altura ? obj.altura : 0;
        this.time = obj && obj.time ? obj.time : 0;
    }
}