import {Component, OnInit, ViewChild} from '@angular/core';
import {Score} from '../_models/score-message';
import {ScoreService} from '../_services/score.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Sort} from '@angular/material';

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

@Component({
  selector: 'app-student-checkscore',
  templateUrl: './student-checkscore.component.html',
  styleUrls: ['./student-checkscore.component.scss']
})

// export class StudentCheckscoreComponent implements OnInit {
//
//   score: Score[];
//   sortedData: Score[];
//
//   getScores(): void {
//     this.scoreService.getScores().subscribe(score => this.score = score);
//   }// 订阅getScores的返回
//
//   constructor(
//     private scoreService: ScoreService
//   ) {
//      this.sortedData = this.score;
//   }
//
//   sortData(sort: Sort) {
//     const data = this.score;
//     if (!sort.active || sort.direction === '') {
//       this.sortedData = data;
//       return;
//     }
//
//     this.sortedData = data.sort((a, b) => {
//       const isAsc = sort.direction === 'asc';
//       switch (sort.active) {
//         case 'totalScore':
//           return compare(a.totalScore, b.totalScore, isAsc);
//         case 'finalScore':
//           return compare(a.finalScore, b.finalScore, isAsc);
//         case 'courseId':
//           return compare(a.courseCourseId, b.courseCourseId, isAsc);
//         case 'avgOnlineScore':
//           return compare(a.avgOnlineScore, b.avgOnlineScore, isAsc);
//         case 'midScore':
//           return compare(a.midScore, b.midScore, isAsc);
//         case 'studentId':
//           return compare(a.studentUserId, b.studentUserId, isAsc);
//         default:
//           return 0;
//       }
//     });
//   }
//
//   ngOnInit() {
//     this.getScores();
//   }
// }

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
