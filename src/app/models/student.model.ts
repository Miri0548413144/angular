import { absenceDay } from "./absence.model";
import { Test } from "./test.module";

export class Student{
    id!: number;
    firstName: string="";
    lastName: string="";
    status: string="";
    departureDate?: Date;
    avg!:number;
    prgId?:number;
    year?:Year;
    tests?:Test[];
    public absenceDays: absenceDay[] = [];
    constructor(id?:number,fname?: string, lname?: string, status?: string,  avg?: number,prgId?:number, year?: number,tests?:Test[],absenceDays?:absenceDay[]) {
        this.id = id||0;
        this.firstName = fname || "new";
        this.lastName = lname || "student";
        this.status = status || "Israel";
        this.departureDate = new Date();
        this.avg = avg || 78;
        this.prgId = prgId||1;
        this.year = year || 2;
        this.tests = tests||[{"testId": 1, "testDate": new Date(), "description": "test 1", "mark": 80 }]
        this.absenceDays=absenceDays||[{"dateStart":new Date(),"countDays":6}];
    }
}
export enum Year{
    A=1,
    B=2,
    C=3
}