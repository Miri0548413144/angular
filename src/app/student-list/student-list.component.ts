import { Component,OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent implements OnInit{
 
 students: Student[]=[{id:1,firstName:"Reuven",lastName:"Cohen",status:"active",avg:50},
                      {id:2,firstName:"Shimon",lastName:"Levi",status:"active",avg:95},
                      {id:3,firstName:"Yehuda",lastName:"Israeli",status:"inactive",departureDate:new Date(2020,10,10),avg:100}]
DeleteStudent(student: Student){
  let indexToDelete=this.students.indexOf(student);
  this.students.splice(indexToDelete,1);
}
  selectedStudent: Student | undefined;
  
ShowDetails(StudentToShow:Student){
  this.selectedStudent=StudentToShow;
}
addStudent(){
    this.selectedStudent=new Student((this.students.length)+1,"new student name");
}
addNewStudentToList(studentToAdd: Student){ 
  this.students.push(studentToAdd);
  this.selectedStudent=undefined;
}
//delById(e:any){
// search(e.id);
//}
//search(str:string){
  
//}
 constructor(){
  
 }
 ngOnInit(): void {
   
 }
}
