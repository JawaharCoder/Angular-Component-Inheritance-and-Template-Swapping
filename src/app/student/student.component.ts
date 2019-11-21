import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  @Input() students: Student[] = [];
  @Output() select = new EventEmitter();

  heading = 'Students';

  constructor(){
    console.log(this.students);
  }

  selectStudent(student: Student) {
    this.select.emit(student);
  }
}
