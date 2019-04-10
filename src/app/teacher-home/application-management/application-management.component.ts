import { Component, OnInit } from '@angular/core';
import { CourseService, SessionService } from '../../_services';
import { ApplicationService } from '../../_services/application.service';
import { CourseSummaryMessage } from '../../_models/course-summary-message';
import { ApplicationMessage, ApplicationState, SessionMessage } from '../../_models';
import { HttpErrorResponse } from '@angular/common/http';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { of } from 'rxjs/internal/observable/of';
import { zip } from 'rxjs/internal/observable/zip';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';

@Component({
  selector: 'app-application-management',
  templateUrl: './application-management.component.html',
  styleUrls: ['./application-management.component.scss']
})
export class ApplicationManagementComponent implements OnInit {

  session: SessionMessage;
  courseAndApplications: {
    course: CourseSummaryMessage,
    applications: ApplicationMessage[],
  }[];
  errorResponse: HttpErrorResponse;
  applicationDisplayedColumns = [
    'username',
    'realName',
    'email',
    'phone',
    'clazz',
    'college',
    'time',
    'comment',
    'state',
    'actions',
  ];
  applicationState = ApplicationState;

  constructor(
    private sessionService: SessionService,
    private courseService: CourseService,
    private applicationService: ApplicationService,
  ) {
  }

  ngOnInit() {
    this.getSession();
    this.getCoursesAndApplications();
  }

  getSession() {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession.subscribe(
      session => this.session = session,
    );
  }

  getCoursesAndApplications() {
    this.courseService.getCourseOfTeacher(this.session)
      .pipe(
        mergeMap(
          courses => forkJoin(
            courses.map(
              course => zip(
                of(course),
                this.applicationService.getCourseApplication(course.courseId)
              )
            )
          )
        )
      ).subscribe(
      results => this.courseAndApplications = results.map(result => {
        return { course: result[0], applications: result[1] };
      }),
      errorResponse => this.errorResponse = errorResponse,
    );
  }

  modifyApplication(message: ApplicationMessage, pass: boolean) {
    this.applicationService.changeApplication(message, pass)
      .subscribe(
        changedMessage => message.state = changedMessage.state,
        errorResponse => this.errorResponse = errorResponse,
      );
  }
}
