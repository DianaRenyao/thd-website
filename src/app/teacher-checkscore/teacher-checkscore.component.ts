import {Component, OnInit, ViewChild} from '@angular/core';
import {Score} from '../_models/score-message';
import {ScoreService} from '../_services/score.service';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {Sort} from '@angular/material';
import {SessionMessage} from '../_models';
import {SessionService} from '../_services';

@Component({
  selector: 'app-teacher-checkscore',
  templateUrl: './teacher-checkscore.component.html',
  styleUrls: ['./teacher-checkscore.component.scss']
})
export class TeacherCheckscoreComponent implements OnInit {

  displayedColumns: string[] = ['studentUserId', 'courseCourseId', 'midScore', 'finalScore', 'avgOnlineScore', 'totalScore'];
  dataSource: MatTableDataSource<Score>;

  constructor() { }

  ngOnInit() {
  }

}
