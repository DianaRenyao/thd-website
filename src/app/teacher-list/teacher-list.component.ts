import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services';
import { TeacherMessage } from '../_models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {

  displayedColumns: string[] = [
    'username',
    'realName',
    'email',
    'phone',
  ];
  dataSource: TeacherMessage[];
  errorResponse: HttpErrorResponse;

  constructor(
    private userService: UserService
  ) {
  }

  getAllTeachers(): void {
    this.userService.getAllTeachers()
      .subscribe(
        dataSource => this.dataSource = dataSource,
        errorResponse => this.errorResponse = errorResponse,
      );
  }

  ngOnInit() {
    this.dataSource = [];
    this.getAllTeachers();
  }
}
