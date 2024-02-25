import { Injectable } from "@angular/core";
import { Student } from "./models/student.model";
 const Students=[new Student( 1,  "Reuven",  "Cohen",  "active",  50,3,3,[{"testId": 1, "testDate": new Date(), "description": "test 125623", "mark": 80}],[{"dateStart":new Date(),"countDays":6}] ),
new Student( 2,  "Shimon",  "Levi",  "active", 90 ),
new Student( 3,  "Yehuda",  "Israeli", "inactive", 100 )];
@Injectable()
export class StudentService{
    public STUDENTS: Student[] =[new Student( 1,  "Reuven",  "Cohen",  "active",  50,3,3,[{"testId": 1, "testDate": new Date(), "description": "test 125623", "mark": 80}],[{"dateStart":new Date(),"countDays":6}] ),
    new Student( 2,  "Shimon",  "Levi",  "active", 90 ),
    new Student( 3,  "Yehuda",  "Israeli", "inactive", 100 )];
    getStudents():Student[]{
        return  Students;
    }
    getStudentsSlow():Promise<Student[]>{
        return new Promise((res,rej)=>{
            setTimeout(()=>{

                res(Students)
            },3000)
        })
    }
    getAverageForId(id: number) {
        return Students.filter(x => x.id == id)[0].avg;
    }
    getSum(id: number) {
        let student = Students.find(x => x.id == id);
        let sum = 0;
        if (student) {
            for (const absent of student.absenceDays)
                sum += absent.countDays;
        }
        return sum;
    }

    constructor() {
        Students[0].id = 1;
        Students[1].id = 2;
        Students[2].id = 3;
        Students[0].tests = [{ "testId": 105, "testDate": new Date(), "description": "english", "mark": 80 },
        { "testId": 105, "testDate": new Date(), "description": "math", "mark": 100 }]
    }
}