import { Component, Input, OnInit } from '@angular/core';
import { TeacherMessage } from '../_models';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  @Input()
  teacher: TeacherMessage;

  constructor() {
  }

  ngOnInit() {
    console.log(this.teacher);
  }

}
