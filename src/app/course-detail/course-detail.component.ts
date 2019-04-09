import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService, SessionService } from '../_services';
import { HttpErrorResponse } from '@angular/common/http';
import { ApplicationMessage, ApplicationState, CourseMessage, SessionMessage } from '../_models';
import { ApplicationService } from '../_services/application.service';
import { MatDialog } from '@angular/material';
import { ApplyCourseDialogComponent } from '../apply-course-dialog/apply-course-dialog.component';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {


  applicationState = ApplicationState;

  session: SessionMessage;
  course: CourseMessage;
  application: ApplicationMessage;
  courseErrorResponse: HttpErrorResponse;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private sessionService: SessionService,
    private applicationService: ApplicationService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.getCourseDetail();
    this.getSession();
    if (this.session.userInfo.role === 'student') {
      this.getApplication();
    }
  }

  getCourseDetail() {
    const courseId: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.courseService.getCourseDetail(courseId)
      .subscribe(
        course => this.course = course,
        errorResponse => this.courseErrorResponse = errorResponse,
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

  getApplication() {
    const courseId: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.applicationService.getStudentCourseApplication(this.session.userInfo.username, courseId)
      .subscribe(
        application => this.application = application,
        () => this.application = null,
      );
  }

  applyCourse() {
    this.dialog.open(ApplyCourseDialogComponent, {
      data: this.course,
    })
      .afterClosed()
      .subscribe(() => this.getApplication());
  }
}
