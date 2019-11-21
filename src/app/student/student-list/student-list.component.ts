import { Component, OnInit } from '@angular/core';
import { StudentComponent } from '../student.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})

export class StudentListComponent extends StudentComponent { 

 

  ngOnInit() {
    
  }



}