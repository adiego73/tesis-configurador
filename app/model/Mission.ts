export class Mission {
    public title:string;
    public description:string;

    constructor(obj?:any) {
        this.title = obj && obj.title ? obj.title : "Mision";
        this.description = obj && obj.description ? obj.description : "Mision description";
    }
}