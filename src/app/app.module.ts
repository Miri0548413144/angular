import { NgModule } from "@angular/core";
import{BrowserModule}from"@angular/platform-browser"
import { AppComponent } from "./app.component";
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { StudentDetailsFormMDComponent } from './student-details-form-md/student-details-form-md.component';
import { TestsHistoryComponent } from './tests-history/tests-history.component';
import { StudentService } from "./student.service";
@NgModule({
    declarations:[AppComponent, StudentListComponent, StudentDetailsComponent, StudentDetailsFormMDComponent, TestsHistoryComponent],
    imports:[BrowserModule,FormsModule,ReactiveFormsModule],
    providers:[StudentService],
    bootstrap:[AppComponent]
})
export class AppModule{}