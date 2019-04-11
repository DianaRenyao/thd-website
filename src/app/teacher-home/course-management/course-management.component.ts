import {Component, OnInit} from '@angular/core';
import {CourseSummaryMessage} from '../../_models/course-summary-message';
import {HttpErrorResponse} from '@angular/common/http';
import {CourseService, SessionService} from '../../_services';
import {Router} from '@angular/router';
import {SessionMessage} from '../../_models';

@Component({
  selector: 'app-course-management',
  templateUrl: './course-management.component.html',
  styleUrls: ['./course-management.component.scss']
})
export class CourseManagementComponent implements OnInit {
  courseSummaryMessages: CourseSummaryMessage[];
  errorResponse: HttpErrorResponse;
  session: SessionMessage;

  constructor(
    private courseService: CourseService,
    private sessionService: SessionService,
    private router: Router) {
  }

  getCourseOfTeacher() {
    this.courseService.getCourseOfTeacher(this.session)
      .subscribe(
        message => this.courseSummaryMessages = message,
      );
  }

  getSessionMessage() {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession
      .subscribe(
        session => this.session = session,
      );
  }

  ngOnInit() {
    this.getSessionMessage();
    this.getCourseOfTeacher();
  }

  onClick(courseSummaryMessage: CourseSummaryMessage): void {
    console.log('is selected');
    this.router.navigate([`/teacher-home/chapter-management/${courseSummaryMessage.courseId}`]);
  }
}
