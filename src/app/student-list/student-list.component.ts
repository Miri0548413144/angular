import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
})
export class StudentListComponent implements OnInit {

  students!: Student[] //= this._studentService.getStudents()
  // [new Student( 1,  "Reuven",  "Cohen",  "active",  50,3,3,[{"testId": 1, "testDate": new Date(), "description": "test 125623", "mark": 80}] ),
  // new Student( 2,  "Shimon",  "Levi",  "active", 90 ),
  // new Student( 3,  "Yehuda",  "Israeli", "inactive", 100 )]
  selectedStudent!: Student;

  @Output()
  onFocusStudent: EventEmitter<Student>=new EventEmitter();
  
  focusStudent(s:Student){
    this.selectedStudent=s;
    this.onFocusStudent.emit(this.selectedStudent);
   }
  DeleteStudent(student: Student) {
    let indexToDelete = this.students.indexOf(student);
    this.students.splice(indexToDelete, 1);
  }

  ShowDetails(StudentToShow: Student) {
    console.log("ghjk");
    this.selectedStudent = StudentToShow;
  }
  addStudent() {
    this.selectedStudent = new Student();
  }
  saveStudentToList(studentToSave: Student) {
    if (studentToSave.id == 0) {
      let id = (this.students.length) + 1;
      studentToSave.id = id;
      this.students.push(new Student( studentToSave.id, studentToSave.firstName, studentToSave.lastName,studentToSave.status,studentToSave.avg));
      alert("added succsesful" + JSON.stringify(studentToSave));
    }
    else {
      let studentToUpdate = this.students.filter(x => x.id == studentToSave.id)[0];
      let index = this.students.indexOf(studentToUpdate);
      this.students[index] = studentToSave;
    }
    this.selectedStudent;
  }
  constructor(private _studentService:StudentService) {
  }
  ngOnInit(): void {
    this._studentService.getStudentsSlow().then(data=>{this.students=data;})
  }
}
