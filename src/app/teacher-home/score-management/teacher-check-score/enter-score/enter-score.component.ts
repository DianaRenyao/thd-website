import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SelectedCourseService} from '../../../../_services/selected-course.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {SelectedCourseEditingMessage, SessionMessage} from '../../../../_models';
import {AlertService, SessionService} from '../../../../_services';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-enter-score',
  templateUrl: './enter-score.component.html',
  styleUrls: ['./enter-score.component.scss']
})
export class EnterScoreComponent implements OnInit {

  displayedColumns: string[] = ['studentUserId', 'midScore', 'finalScore', 'avgOnlineScore', 'totalScore'];
  dataSource: MatTableDataSource<SelectedCourseEditingMessage>;
  inputData = [];
  inputScore: SelectedCourseEditingMessage[] = [];
  totalScore = [];
  session: SessionMessage;
  @ViewChild(MatSort) sort: MatSort;

  static calculateTotalScore(avgOnlineScore, midScore, finalScore): number {
    return avgOnlineScore * 0.3 + midScore * 0.1 + finalScore * 0.6;
  }

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
  }

  importFromExcel(evt: any): void {
    console.log('start');
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
        this.inputScore[i - 1] = new SelectedCourseEditingMessage();
        this.inputScore[i - 1].studentUserId = this.inputData[i][0];
        this.inputScore[i - 1].midScore = this.inputData[i][2];
        this.inputScore[i - 1].finalScore = this.inputData[i][3];
        this.inputScore[i - 1].avgOnlineScore = this.inputData[i][4];
      }
      this.dataSource = new MatTableDataSource(this.inputScore);
      evt.target.value = '';
    };
    reader.readAsBinaryString(target.files[0]);
  }

  addSelectedCourseScore() {
    const courseId: number = parseInt(this.route.snapshot.paramMap.get('courseId'), 10);
    let i: number;
    for (i = 1; i < this.inputData.length; i = i + 1) {
      this.scoreService.addSelectedCourseScore({
          studentUserId: this.inputData[i][0],
          midScore: this.inputData[i][2],
          finalScore: this.inputData[i][3],
          avgOnlineScore: this.inputData[i][4],
        },
        this.inputScore[i - 1].studentUserId, courseId, this.session.userInfo.username
      ).subscribe(
        () => {
          this.alertService.success('上传成功');
        },
        errorResponse => {
          this.alertService.errorResponse('上传失败', errorResponse);
        },
      );
    }
  }

  ngOnInit() {
    this.getSession();
  }
}
