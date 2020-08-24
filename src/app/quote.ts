export class Quote {
    public likes: number;
    public  dislikes: number;
    constructor(public id:number, public userName:string, public quotation:string){
        this.likes = 0;
        this.dislikes = 0;
    }
}
