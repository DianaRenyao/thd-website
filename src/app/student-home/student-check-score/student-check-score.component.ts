import { Component, OnInit } from '@angular/core';
import { SelectedCourseService } from '../../_services/selected-course.service';
import { MatTableDataSource } from '@angular/material';
import { SelectedCourseMessage, SessionMessage } from '../../_models';
import { SessionService } from '../../_services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-student-check-score',
  templateUrl: './student-check-score.component.html',
  styleUrls: ['./student-check-score.component.scss']
})

export class StudentCheckScoreComponent implements OnInit {

  displayedColumns: string[] = ['courseCourseId', 'courseName', 'midScore', 'finalScore', 'avgOnlineScore', 'totalScore'];
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
