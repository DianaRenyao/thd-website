import { Component, OnInit } from '@angular/core';
import { TeacherMessage } from '../_models';
import { UserService } from '../_services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachers: TeacherMessage[];
  errorResponse: HttpErrorResponse;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers() {
    this.userService.getAllTeachers()
      .subscribe(
        teachers => this.teachers = teachers,
        errorResponse => this.errorResponse = errorResponse,
      );
  }

}
