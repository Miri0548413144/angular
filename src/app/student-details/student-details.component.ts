import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent implements OnInit{

 @Input()
 student: Student | undefined;
 @Output()
 onSaveNewStudent: EventEmitter<Student>=new EventEmitter();
 saveNewStudent(){
  this.onSaveNewStudent.emit(this.student);
 }
 ngOnInit(): void{}
}
function output() {
  throw new Error('Function not implemented.');
}

