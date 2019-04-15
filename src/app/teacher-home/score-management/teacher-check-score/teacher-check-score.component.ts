import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { SelectedCourseService } from '../../../_services/selected-course.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { AlertService, SessionService } from '../../../_services';
import G2 from '@antv/g2/build/g2';
import { SelectedCourseMessage, SessionMessage } from '../../../_models';


@Component({
  selector: 'app-teacher-check-score',
  templateUrl: './teacher-check-score.component.html',
  styleUrls: ['./teacher-check-score.component.scss']
})
export class TeacherCheckScoreComponent implements OnInit {
  displayedColumns: string[] = ['studentUserId', 'studentName', 'midScore', 'finalScore', 'avgOnlineScore', 'totalScore'];
  dataSource: MatTableDataSource<SelectedCourseMessage>;
  countFail: number;
  countSixtyToSeventy: number;
  countSeventyToEighty: number;
  countNinetyToHundred: number;
  countEightyToNinety: number;
  session: SessionMessage;
  errorResponse: HttpErrorResponse;
  showChart: boolean;
  filter: string;

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
    this.showChart = false;
  }

  getScores(): void {

    const courseId: number = parseInt(this.route.snapshot.paramMap.get('courseId'), 10);

    this.scoreService.getCourseScores(this.session.userInfo.username, courseId)
      .subscribe(dataSource => {
          this.dataSource = new MatTableDataSource(dataSource);
          this.dataSource.data.forEach((value) => {
            if (value.totalScore < 60) {
              this.countFail += 1;
            } else if (value.totalScore >= 60 && value.totalScore < 70) {
              this.countSixtyToSeventy += 1;
            } else if (value.totalScore >= 70 && value.totalScore < 80) {
              this.countSeventyToEighty += 1;
            } else if (value.totalScore >= 80 && value.totalScore < 90) {
              this.countEightyToNinety += 1;
            } else if (value.totalScore >= 90 && value.totalScore < 100) {
              this.countNinetyToHundred += 1;
            }
          });
          const data = [
            { scoreClass: '<60', count: this.countFail },
            { scoreClass: '60-70', count: this.countSixtyToSeventy },
            { scoreClass: '70-80', count: this.countSeventyToEighty },
            { scoreClass: '80-90', count: this.countEightyToNinety },
            { scoreClass: '90-100', count: this.countNinetyToHundred }
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
        },
        errorResponse => this.errorResponse = errorResponse);

  }

  getTotalScoreAvg() {
    const num = this.dataSource.data.length;
    let temp;
    const totalScoreSum = this.dataSource.data.forEach(value => {
      temp = temp + value;
    });
  }


  ngOnInit() {
    this.getSession();
    this.getScores();
  }

  // toggleShowChart() {
  //   if (this.showChart) {
  //     this.showChart = false;
  //   } else {
  //     this.showChart = true;
  //   }
  // }

  applyFilter() {
    this.dataSource.filter = this.filter.trim().toLowerCase();
  }
}
