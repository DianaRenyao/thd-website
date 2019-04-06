import {Component, OnInit} from '@angular/core';
import {Score} from '../_models/score-interface';
import {ScoreService} from '../_services/score.service';

// const data: Score[] = [{
//   approveTime: '2016 - 11 - 11' ,
//   studentId: 11,
//   courseId: 1,
//   midScore: 20,
//   finalScore: 60,
//   avgOnlineScore: 50,
//   totalScore: 90
// }];
@Component({
  selector: 'app-student-checkscore',
  templateUrl: './student-checkscore.component.html',
  styleUrls: ['./student-checkscore.component.scss']
})

export class StudentCheckscoreComponent implements OnInit{

// export class StudentCheckscoreComponent implements OnInit
  displayedColumns: string[] = ['stu_id', 'course_id', 'midScore', 'finalScore', 'avgOnlineScore', 'totalScore'];
  dataSource: Score[];
  // dataSource = data;

  getScores(): void {
    this.scoreService.getScores().subscribe(dataSource => this.dataSource = dataSource);
  }// 订阅getScores的返回

  constructor(
    private scoreService: ScoreService
  ) {
  }

  ngOnInit() {
    this.getScores();
  }


}




