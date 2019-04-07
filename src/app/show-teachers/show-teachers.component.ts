import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services';
import {TeacherMessage, UserInfoMessage} from '../_models';
import {Observable} from 'rxjs';
import {Z} from '@angular/cdk/typings/esm5/keycodes';

@Component({
  selector: 'app-show-teachers',
  templateUrl: './show-teachers.component.html',
  styleUrls: ['./show-teachers.component.scss']
})
export class ShowTeachersComponent implements OnInit {

  displayedColumns: string[] = [ 'username', 'realName', 'email', 'phone'];
  dataSource: UserInfoMessage[];

  getAllTeachers(): void {
    // this.dataSource = [
    //   { username: '2016000000', realName: 'Hanwanjiang', email: 'hanwanjiang@bupr.edu.cn', phone: '123123',
    //     id: 2, role: 'teacher', timeCreated: null } ,
    // ];
    this.userService.getAllTeachers().subscribe(dataSource => this.dataSource = dataSource);
}
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAllTeachers();
  }

}
