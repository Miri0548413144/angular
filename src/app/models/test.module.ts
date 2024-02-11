export class Test {
    testId?: number;
    testDate?: Date;
    description: string = "";
    mark!: number;
    constructor(t:number,td:Date,d:string,m:number){
        this.testId=t;
        this.testDate=td;
        this.description=d;
        this.mark=m;
    }
}