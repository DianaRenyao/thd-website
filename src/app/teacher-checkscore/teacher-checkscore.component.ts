import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {SelectedCourseService} from '../_services/selected-course.service';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {Sort} from '@angular/material';
import {SelectedCourseCreationMessage} from '../_models/selected-course-creation-message';
import {AlertService, SessionService} from '../_services';
import * as XLSX from 'xlsx';
import {forEach} from '@angular/router/src/utils/collection';
import G2 from '@antv/g2/build/g2';
import {SessionMessage} from '../_models';
import {SelectedCourseMessage} from "../_models/selected-course-message";

@Component({
  selector: 'app-teacher-checkscore',
  templateUrl: './teacher-checkscore.component.html',
  styleUrls: ['./teacher-checkscore.component.scss']
})
export class TeacherCheckscoreComponent implements OnInit {
  displayedColumns: string[] = ['studentUserId', 'midScore', 'finalScore', 'avgOnlineScore', 'totalScore'];
  dataSource: MatTableDataSource<SelectedCourseMessage>;
  countFail: number;
  countSixtyToSeventy: number;
  countSeventyToEighty: number;
  countNinetyToHundred: number;
  countEightyToNinety: number;
  session: SessionMessage;
  @ViewChild(MatSort) sort: MatSort;

  getSession() {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession.subscribe(
      session => {
        this.session = session;
      }
    );
  }

  constructor(private scoreService: SelectedCourseService,
              private alertService: AlertService,
              private sessionService: SessionService,
              private route: ActivatedRoute) {
    this.countFail = 0;
    this.countSixtyToSeventy = 0;
    this.countSeventyToEighty = 0;
    this.countEightyToNinety = 0;
    this.countNinetyToHundred = 0;
  }

  getScores(): void {

    const courseId: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.scoreService.getCourseScores(this.session.userInfo.username, courseId)
      .subscribe(dataSource => {
        this.dataSource = new MatTableDataSource(dataSource);
        this.dataSource.data.forEach((value) => {
          if (value < 60) {
            this.countFail += 1;
          } else if (value >= 60 && value < 70) {
            this.countSixtyToSeventy += 1;
          } else if (value >= 70 && value < 80) {
            this.countSeventyToEighty += 1;
          } else if (value >= 80 && value < 90) {
            this.countEightyToNinety += 1;
          } else if (value >= 90 && value < 100) {
            this.countNinetyToHundred += 1;
          }
        });

        const data = [
          {scoreClass: '<60', count: this.countFail},
          {scoreClass: '60-70', count: this.countSixtyToSeventy},
          {scoreClass: '70-80', count: this.countSeventyToEighty},
          {scoreClass: '80-90', count: this.countEightyToNinety},
          {scoreClass: '90-100', count: this.countNinetyToHundred}
        ];

        const chart = new G2.Chart({
          container: 'barChart',
          width: 900,
          height: 500
        });

        /* 图表分析生成 */
        chart.source(data);
        chart.interval().position('scoreClass*count').color('scoreClass');
        chart.render();

        this.dataSource.sort = this.sort;
      });
  }

  getTotalScoreAvg() {
    const num = this.dataSource.data.length;
    let temp;
    const totalScoreSum = this.dataSource.data.forEach(value => {
      temp = temp + value;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
    this.getSession();
    this.getScores();
  }
}
