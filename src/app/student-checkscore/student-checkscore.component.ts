import {Component, OnInit, ViewChild} from '@angular/core';
import {Score} from '../_models/score-creation-message';
import {ScoreService} from '../_services/score.service';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {Sort} from '@angular/material';
import {SessionMessage} from '../_models';
import {SessionService} from '../_services';
import { MatButtonModule } from '@angular/material';


@Component({
  selector: 'app-student-checkscore',
  templateUrl: './student-checkscore.component.html',
  styleUrls: ['./student-checkscore.component.scss']
})

export class StudentCheckscoreComponent implements OnInit {

  displayedColumns: string[] = ['studentUserId', 'courseCourseId', 'midScore', 'finalScore', 'avgOnlineScore', 'totalScore'];
  dataSource: MatTableDataSource<Score>;
  session: SessionMessage;
  num: number;

  getScores(): void {
    this.scoreService.getScores(this.session.userInfo.username)
      .subscribe(dataSource => this.dataSource = new MatTableDataSource(dataSource));
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
    private scoreService: ScoreService,
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
