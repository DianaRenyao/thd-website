import {Component, OnInit, ViewChild} from '@angular/core';
import {Score} from '../_models/score-message';
import {ScoreService} from '../_services/score.service';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-student-checkscore',
  templateUrl: './student-checkscore.component.html',
  styleUrls: ['./student-checkscore.component.scss']
})

export class StudentCheckscoreComponent implements OnInit {

  displayedColumns: string[] = ['studentUserId', 'courseCourseId', 'midScore', 'finalScore', 'avgOnlineScore', 'totalScore'];
  dataSource: MatTableDataSource<Score>;

  num: number;

  // @ViewChild(MatSort) sort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  getScores(): void {
    this.scoreService.getScores().subscribe(dataSource => this.dataSource = new MatTableDataSource(dataSource));
  }// 订阅getScores的返回

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // getAvgAvgOnlineScore() {
  //   return (this.dataSource.data.map(t => t.avgOnlineScore).reduce((acc, value) => acc + value, 0)) / this.num;
  // }
  //
  // getTotalNum() {
  //   return this.dataSource.data.forEach((value: Score) => {
  //     this.num = this.num + 1;
  //   });
  // }

  constructor(
    private scoreService: ScoreService
  ) {
  }

  ngOnInit() {
    this.getScores();
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.getTotalNum();
  }
}
