export class Quote {
    public likes: number;
    public  dislikes: number;
    public showDetails: boolean;
    constructor(public id:number, public userName:string, public quotation:string, public author: string,public quoteDate: Date){
        this.likes = 0;
        this.dislikes = 0;
        this.showDetails= false;
    }
}
