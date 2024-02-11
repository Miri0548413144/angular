import { Component, Input } from '@angular/core';
import { Test } from '../models/test.module';
import { ɵCoerceStrArrToNumArr } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-tests-history',
  templateUrl: './tests-history.component.html'
})
export class TestsHistoryComponent {
  @Input() tests?: Test[]
  @Input() id?: number;
  avgId(): number {
    if(this.id!=undefined)
      return this._studentService.getAverageForId(this.id);
    return 0;
  }
  constructor(private _studentService:StudentService) { }

  ngOnInit(): void {
  }
}
