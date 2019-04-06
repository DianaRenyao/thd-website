import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services';
import {TeacherMessage, UserInfoMessage} from '../_models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-show-teachers',
  templateUrl: './show-teachers.component.html',
  styleUrls: ['./show-teachers.component.scss']
})
export class ShowTeachersComponent implements OnInit {

  displayedColumns: string[] = ['position', 'teacherNumber', 'realName', 'email', 'phone'];
  dataSource: Observable<UserInfoMessage[]>;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.dataSource = this.userService.getAllTeachers();
  }

}
