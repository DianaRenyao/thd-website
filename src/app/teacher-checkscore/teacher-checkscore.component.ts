import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {ScoreService} from '../_services/score.service';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import {Sort} from '@angular/material';
import {Score} from '../_models/score-creation-message';
import {AlertService} from '../_services';
import * as XLSX from 'xlsx';
import {forEach} from '@angular/router/src/utils/collection';
import G2 from '@antv/g2/build/g2';

@Component({
  selector: 'app-teacher-checkscore',
  templateUrl: './teacher-checkscore.component.html',
  styleUrls: ['./teacher-checkscore.component.scss']
})
export class TeacherCheckscoreComponent implements OnInit {

  displayedColumns: string[] = ['studentUserId', 'midScore', 'finalScore', 'avgOnlineScore', 'totalScore'];
  dataSource: MatTableDataSource<Score>;
  inputData = [];
  inputScore: Score[] = [];
  totalScore = [];
  let
  countFail: number;
  countSixtyToSeventy: number;
  countSeventyToEighty: number;
  countNinetyToHundred: number;
  countEightyToNinety: number;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private scoreService: ScoreService,
              private alertService: AlertService,
              private route: ActivatedRoute) {
    this.countFail = 0;
    this.countSixtyToSeventy = 0;
    this.countSeventyToEighty = 0;
    this.countEightyToNinety = 0;
    this.countNinetyToHundred = 0;
  }

  getScores(): void {

    const courseId: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.scoreService.getCourseScores(courseId)
      .subscribe(dataSource => {
        this.dataSource = new MatTableDataSource(dataSource);
        console.log(dataSource);
        dataSource.forEach((value, index) => {
          this.totalScore[index] = value.totalScore;
        });
        console.log(this.totalScore);
        this.totalScore.forEach((value) => {
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

  importFromExcel(evt: any): void {

    const courseId: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    const target: DataTransfer = (evt.target) as DataTransfer;
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.inputData = (XLSX.utils.sheet_to_json(ws, {header: 1}));
      console.log(this.inputData);
      let i: number;
      for (i = 1; i < this.inputData.length; i = i + 1) {
        this.inputScore[i - 1] = new Score();
        this.inputScore[i - 1].studentUserId = this.inputData[i][0];
        this.inputScore[i - 1].midScore = this.inputData[i][2];
        this.inputScore[i - 1].finalScore = this.inputData[i][3];
        this.inputScore[i - 1].avgOnlineScore = this.inputData[i][4];
        this.dataSource = new MatTableDataSource(this.inputScore);

        this.scoreService.addSelectedScore({
            studentUserId: this.inputData[i][0],
            midScore: this.inputData[i][2],
            finalScore: this.inputData[i][3],
            avgOnlineScore: this.inputData[i][4],
            totalScore: this.getTotalScore(),
          },
          this.inputScore[i - 1].studentUserId, courseId
        ).subscribe(
          () => {
            this.alertService.success('上传成功');
          },
          errorResponse => {
            this.alertService.errorResponse('上传失败', errorResponse);
          },
        );
      }
      evt.target.value = '';
    };
    reader.readAsBinaryString(target.files[0]);
  }

  getTotalScore(): number {
    let totalScore: number;
    this.dataSource.data.forEach(value => {
      value.totalScore = (value.avgOnlineScore) * 0.3 + (value.midScore) * 0.1 + (value.finalScore) * 0.6;
      totalScore = value.totalScore;
    });
    return totalScore;
  }

  ngOnInit() {
    this.getScores();
  }
}
