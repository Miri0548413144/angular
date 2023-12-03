export class Student{
    id!: number;
    firstName: string="";
    lastName: string="";
    status: string="";
    departureDate?: Date;
    avg?:number;
    constructor(id: number, lastName: string ){
        this.id=id;
        this.lastName=lastName;
    }
}