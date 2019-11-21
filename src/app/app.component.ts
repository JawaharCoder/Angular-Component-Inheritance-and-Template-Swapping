import { Component } from '@angular/core';

import { Student } from './student/student.model';

const students: Student[] = [
  { id: 1, name: 'Alpha', age : '10', gender : 'Male', regno : '100', grade : 'A'  },
  { id: 2, name: 'Beta', age : '10', gender : 'Male', regno : '101', grade : 'A'  },
  { id: 3, name: 'Emma', age : '10', gender : 'Female', regno : '102', grade : 'A'  },
  { id: 4, name: 'Olivia', age : '10', gender : 'Female', regno : '103', grade : 'A'  },
  { id: 5, name: 'Jawahar', age : '10', gender : 'Male', regno : '104', grade : 'A'  },
 ];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-list-template-swapping';
  displayTable = true;
  students = students;
  selectedStudent = students[0];

  constructor() { }

  ngOnInit() { }

  selectStudent(student: Student) {
    console.log(student);
    this.selectedStudent = student;
  }
}
