import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService, SessionService } from '../../../../_services';
import { ExamService } from '../../../../_services/exam.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SessionMessage } from '../../../../_models';
import { ExamMessage } from '../../../../_models/exam-message';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.scss']
})
export class ExamDetailComponent implements OnInit {
  @Input()
  examId: number;
  errorResponse: HttpErrorResponse;
  session: SessionMessage;
  exam: ExamMessage;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private sessionService: SessionService,
    private examService: ExamService
  ) {
    this.exam = new ExamMessage();
  }

  ngOnInit() {
    this.getSession();
    this.getExam();
    console.log(this.examId);
    console.log(this.exam);
  }

  getSession() {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession.subscribe(
      session => {
        this.session = session;
      }
    );
  }

  getExam() {
    this.examService.getExam(this.examId, 'true').subscribe(
      exam => this.exam = exam,
      errorResponse => this.errorResponse = errorResponse);
  }
}
