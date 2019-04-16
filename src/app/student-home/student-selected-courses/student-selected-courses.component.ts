import { Component, OnInit } from '@angular/core';
import { SelectedCourseMessage, SessionMessage } from '../../_models';
import { HttpErrorResponse } from '@angular/common/http';
import { SelectedCourseService } from '../../_services/selected-course.service';
import { SessionService } from '../../_services';
import { Router } from '@angular/router';
import { CourseSummaryMessage } from '../../_models/course-summary-message';

@Component({
  selector: 'app-student-courses',
  templateUrl: './student-selected-courses.component.html',
  styleUrls: ['./student-selected-courses.component.scss']
})
export class StudentSelectedCoursesComponent implements OnInit {

  selectedCourses: SelectedCourseMessage[];
  session: SessionMessage;
  errorResponse: HttpErrorResponse;

  constructor(
    private scoreService: SelectedCourseService,
    private sessionService: SessionService,
    private router: Router,
  ) {
  }

  getSelectedCourses(): void {
    this.scoreService.getStudentSelectedCourses(this.session.userInfo.username)
      .subscribe(
        selectedCourses => this.selectedCourses = selectedCourses,
        errorResponse => this.errorResponse = errorResponse
      );
  }

  getSession() {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession.subscribe(
      session => {
        this.session = session;
      }
    );
  }

  ngOnInit() {
    this.getSession();
    if (this.session.userInfo.role === 'student') {
      this.getSelectedCourses();
    }
  }

  enterCourse(course: CourseSummaryMessage) {
    this.router.navigate([`course/${ course.courseId }`]);
  }
}
