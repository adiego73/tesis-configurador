export class Mission {
    public id:number;
    public title:string;
    public description:string;

    constructor(obj?:any) {
        this.id = obj && obj.id ? obj.id : -1;
        this.title = obj && obj.title ? obj.title : "Mision";
        this.description = obj && obj.description ? obj.description : "Mision description";
    }
}