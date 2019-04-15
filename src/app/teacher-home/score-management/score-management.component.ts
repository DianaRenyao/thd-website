import {Component, OnInit} from '@angular/core';
import {CourseSummaryMessage} from '../../_models/course-summary-message';
import {HttpErrorResponse} from '@angular/common/http';
import {CourseService} from '../../_services/course.service';
import {Router} from '@angular/router';
import {SessionMessage} from '../../_models';
import {SessionService} from '../../_services';

@Component({
  selector: 'app-score-management',
  templateUrl: './score-management.component.html',
  styleUrls: ['./score-management.component.scss']
})
export class ScoreManagementComponent implements OnInit {

  courseSummaryMessages: CourseSummaryMessage[];
  errorResponse: HttpErrorResponse;
  session: SessionMessage;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private sessionService: SessionService,
  ) {
  }

  getTeacherCourses(): void {
    this.courseService.getTeacherCourses(this.session.userInfo.username).subscribe(
      courseSummaryMessages => this.courseSummaryMessages = courseSummaryMessages,
      errorResponse => this.errorResponse = errorResponse,
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
    this.courseSummaryMessages = [];
    this.getTeacherCourses();
  }

  onClick(courseSummaryMessage: CourseSummaryMessage): void {
    console.log('is selected');
    this.router.navigate([`courseStudent/${courseSummaryMessage.courseId}`]);
  }
}
