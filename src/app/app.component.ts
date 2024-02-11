import { getLocaleTimeFormat } from "@angular/common";
import { Component } from "@angular/core";
import { Student } from "./models/student.model";



@Component({
    selector: "my-app-root",
    templateUrl: "app.component.html"
})
export class AppComponent {
    title: string = "title: hello world! this is my app"
    student?: Student;
    hour() {
        const currentTime = new Date();
        if (currentTime.getHours() > 6 && currentTime.getHours() < 12)
            return "have a good morning";
        else if (currentTime.getHours() > 12 && currentTime.getHours() < 14)
            return "have a good noon"
        else if (currentTime.getHours() > 14 && currentTime.getHours() < 18)
            return "have a good afternoon"
        else if (currentTime.getHours() > 18 && currentTime.getHours() < 22)
            return "have a good evening"
        else return "have a good night"
    }
    showTests(s: Student) {
        this.student = s;
    }
    constructor() {

    }
}