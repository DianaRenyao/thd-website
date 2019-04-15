import {Component, OnInit, ViewChild} from '@angular/core';
import {SelectedCourseCreationMessage} from '../_models/selected-course-creation-message';
import {SelectedCourseService} from '../_services/selected-course.service';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {Sort} from '@angular/material';
import {SessionMessage} from '../_models';
import {SessionService} from '../_services';
import { MatButtonModule } from '@angular/material';
import {HttpErrorResponse} from '@angular/common/http';
import {SelectedCourseMessage} from '../_models/selected-course-message';

@Component({
  selector: 'app-student-checkscore',
  templateUrl: './student-checkscore.component.html',
  styleUrls: ['./student-checkscore.component.scss']
})

export class StudentCheckscoreComponent implements OnInit {

  displayedColumns: string[] = [ 'courseCourseId', 'courseName', 'midScore', 'finalScore', 'avgOnlineScore', 'totalScore'];
  dataSource: MatTableDataSource<SelectedCourseMessage>;
  session: SessionMessage;
  errorResponse: HttpErrorResponse;

  getScores(): void {
    this.scoreService.getStudentScores(this.session.userInfo.username)
      .subscribe(dataSource => this.dataSource = new MatTableDataSource(dataSource),
        errorResponse => this.errorResponse = errorResponse);
  }

  getSession() {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession.subscribe(
      session => {
        this.session = session;
      }
    );
  }

  constructor(
    private scoreService: SelectedCourseService,
    private sessionService: SessionService,
  ) {
  }

  ngOnInit() {
    this.getSession();
    if (this.session.userInfo.role === 'student') {
      this.getScores();
    }
  }
}
