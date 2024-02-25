import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Student, Year } from '../models/student.model';
import { EDUCATION_PROGRAMS, educationPrograms } from '../models/educationPrograms.model';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-details-form-md',
  templateUrl: './student-details-form-md.component.html',
})
export class StudentDetailsFormMDComponent implements OnInit{
  edc_prg_list:educationPrograms[]=EDUCATION_PROGRAMS;
  currentYear=Year;
  public _student!: Student;
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
      // "absenceDays":new FormControl(this._student?.absenceDays)
    });
  }
  
  @Output()
  onSaveStudent: EventEmitter<Student>=new EventEmitter();

  studentForm: FormGroup = new FormGroup({});

  missingFormDate?: Date;
  missingDays?: number;
  totalMissingDays: number = 0;
  saveNewStudent() {
    let student = this.studentForm.value
    student['absenceDays'] = this._studentService.STUDENTS.find((x => x.id == student.id))?.absenceDays || []
    if (this.missingDays && this.missingDays > 0 && this.missingFormDate) {
      student['absenceDays']?.push({
        dateStart: this.missingFormDate,
        countDays: this.missingDays
      });
    }
    this.onSaveStudent.emit(student);
  }
  // public setStudent(value: Student) {
  //   this._student = value;
  //   this.studentForm = new FormGroup({
  //     // ... שדות קיימים
  //     "absenceDays": new FormControl(this._student?.absenceDays?.countDays),
  //     "absenceDate": new FormControl(this._student?.absenceDays?.dateStart)
  //   });
  // }
  total(): number {
    if (this.student?.id)
      return this._studentService.getSum(this.student.id);
    return 0;
  }
  constructor(private _studentService: StudentService) { }
  ngOnInit(): void{
    console.log("this.student");
    
  }

 }
 function output() {
   throw new Error('Function not implemented.');
 }
  

