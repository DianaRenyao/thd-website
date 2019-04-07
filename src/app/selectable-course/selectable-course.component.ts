import { Component, OnInit } from '@angular/core';
import {TeacherMessage} from '../_models';
import {HttpErrorResponse} from '@angular/common/http';
import {CourseMessage} from '../_models/course-message';
import {CourseService} from '../_services/course.service';

@Component({
  selector: 'app-selectable-course',
  templateUrl: './selectable-course.component.html',
  styleUrls: ['./selectable-course.component.scss']
})
export class SelectableCourseComponent implements OnInit {

  displayedColumns: string[] = [
    'courseId',
    'courseName',
    'summary',
    'period',
    'startDate',
    'finishDate',
    'teacherName'
  ];

  dataSource: CourseMessage[];
  errorResponse: HttpErrorResponse;

  getSelectableCourses(): void {
    this.courseService.getSelectableCourses().
    subscribe(
      dataSource => this.dataSource = dataSource,
      errorResponse => this.errorResponse = errorResponse, );
}

  constructor(
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.dataSource = [];
    this.getSelectableCourses();
  }

}
