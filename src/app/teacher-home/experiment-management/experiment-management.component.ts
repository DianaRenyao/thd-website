import {Component, OnInit} from '@angular/core';
import {ExperimentService} from '../../_services/experiment.service';
import {mergeMap} from 'rxjs/operators';
import {forkJoin, of, zip} from 'rxjs';
import {CourseService, SessionService} from '../../_services';
import {SessionMessage} from '../../_models';
import {CourseSummaryMessage} from '../../_models/course-summary-message';
import {ExperimentMessage} from '../../_models/experiment-message';
import {HttpErrorResponse} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {AddExperimentDialogComponent} from '../../add-experiment-dialog/add-experiment-dialog.component';

@Component({
  selector: 'app-experiment-management',
  templateUrl: './experiment-management.component.html',
  styleUrls: ['./experiment-management.component.scss']
})
export class ExperimentManagementComponent implements OnInit {

  session: SessionMessage;
  courseAndExperiments: {
    course: CourseSummaryMessage,
    experiments: ExperimentMessage[],
  }[];

  errorResponse: HttpErrorResponse;
  experimentDisplayedColumns = [
    // 'experimentId',
    'experimentName',
    'description',
    'startDate',
    'finishDate',
    'courseId',
    'actions',
  ];
  constructor(private experimentService: ExperimentService,
              private courseService: CourseService,
              private sessionService: SessionService,
              private dialog: MatDialog, ) { }

  ngOnInit() {
    this.getSession();
    this.getCoursesAndExperiments();
  }

  getSession() {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession.subscribe(
      session => this.session = session,
    );
  }

  getCoursesAndExperiments() {
    this.courseService.getCourseOfTeacher(this.session)
      .pipe(
        mergeMap(
          courses => forkJoin(
            courses.map(
              course => zip(
                of(course),
                this.experimentService.getCourseExperiment(course.courseId)
              )
            )
          )
        )
      ).subscribe(
      results => this.courseAndExperiments = results.map(result => {
        return { course: result[0], experiments: result[1] };
      }),
      errorResponse => this.errorResponse = errorResponse,
    );
  }

  addExperiment(index: number) {
    console.log('addExp');
    const id = this.courseAndExperiments[index].course.courseId;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;
    this.dialog.open(AddExperimentDialogComponent, dialogConfig).afterClosed().subscribe(
      (experimentMessage: ExperimentMessage) => {
        if (experimentMessage) {
          this.courseAndExperiments[index].experiments.push(experimentMessage);
          this.courseAndExperiments[index] = {...this.courseAndExperiments[index]};
        }
      }
    );

  }

  onFileUploaded(fileSource) {
    // TODO:
  }
}
