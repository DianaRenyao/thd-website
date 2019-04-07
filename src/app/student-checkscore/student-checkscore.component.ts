
import {Component, OnInit, ViewChild} from '@angular/core';
import {Score} from '../_models/score-message';
import {ScoreService} from '../_services/score.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';


@Component({
  selector: 'app-student-checkscore',
  templateUrl: './student-checkscore.component.html',
  styleUrls: ['./student-checkscore.component.scss']
})

export class StudentCheckscoreComponent implements OnInit {

  displayedColumns: string[] = ['studentUserId', 'courseCourseId', 'midScore', 'finalScore', 'avgOnlineScore', 'totalScore'];
  dataSource: MatTableDataSource<Score>;

  @ViewChild(MatSort) sort: MatSort;

  getScores(): void {
    this.scoreService.getScores().subscribe(dataSource => this.dataSource = new MatTableDataSource(dataSource));
  }// 订阅getScores的返回

  constructor(
    private scoreService: ScoreService
  ) {
  }

  ngOnInit() {
    this.getScores();
    this.dataSource.sort = this.sort;

  }
}




