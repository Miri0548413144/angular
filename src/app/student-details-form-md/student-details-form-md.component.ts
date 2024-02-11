import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student, Year } from '../models/student.model';
import { EDUCATION_PROGRAMS, educationPrograms } from '../models/educationPrograms.model';


@Component({
  selector: 'app-student-details-form-md',
  templateUrl: './student-details-form-md.component.html',
})
export class StudentDetailsFormMDComponent {
  edc_prg_list:educationPrograms[]=EDUCATION_PROGRAMS;
  currentYear=Year;
  private _student!: Student;
  public get student():Student{return this._student;}
  @Input()
  public set student(value:Student){
    this._student=value;
    this.studentForm=new FormGroup({
      "id":new FormControl(this._student?.id),
      "firstName": new FormControl(this._student?.firstName, Validators.required),
      "lastName": new FormControl(this._student?.lastName, Validators.required),
      "status": new FormControl(this._student?.status,[Validators.required,Validators.maxLength(8),Validators.minLength(6)] ),
      "departureDate": new FormControl(this._student?.departureDate),
      "avg": new FormControl(this._student?.avg),
      "prgId":new FormControl(this._student?.prgId,Validators.required),
      "year":new FormControl(this._student?.year)
    });
  }
  
  @Output()
  onSaveStudent: EventEmitter<Student>=new EventEmitter();

  studentForm!: FormGroup;

  saveNewStudent(){
    // this._student.firstName=this.studentForm.controls['firstName'].value;
    this._student=this.studentForm.value;
   this.onSaveStudent.emit(this.student);
  }
  ngOnInit(): void{}
  constructor(){
  
  }
 }
 function output() {
   throw new Error('Function not implemented.');
 }
  

