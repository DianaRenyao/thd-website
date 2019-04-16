import { Component, OnInit } from '@angular/core';
import { TeacherMessage } from '../_models';
import { CourseService, UserService } from '../_services';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CourseSummaryMessage } from '../_models/course-summary-message';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent implements OnInit {

  teacher: TeacherMessage;
  courses: CourseSummaryMessage[];
  errorResponse: HttpErrorResponse;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private courseService: CourseService,
  ) {
  }

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get('username');
    this.userService.getTeacher(username)
      .subscribe(
        teacher => this.teacher = teacher,
        errorResponse => this.errorResponse = errorResponse,
      );
    this.courseService.getCourseOfTeacher(username)
      .subscribe(
        courses => this.courses = courses,
        errorResponse => this.errorResponse = errorResponse,
      );
  }

}
