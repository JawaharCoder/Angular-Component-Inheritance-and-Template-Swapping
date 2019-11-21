import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student.component';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss']
})

export class StudentTableComponent extends StudentComponent { 

 

  ngOnInit() {
    
  }



}