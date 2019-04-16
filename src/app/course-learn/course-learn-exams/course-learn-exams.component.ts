import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { SessionMessage } from '../../_models';
import { StudentExamSummaryMessage } from '../../_models/student-exam-summary-message';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService, SessionService } from '../../_services';
import { ExamService } from '../../_services/exam.service';

@Component({
  selector: 'app-course-learn-exams',
  templateUrl: './course-learn-exams.component.html',
  styleUrls: ['./course-learn-exams.component.scss']
})
export class CourseLearnExamsComponent implements OnInit {

  courseId: number;
  exams: StudentExamSummaryMessage[];
  errorResponse: HttpErrorResponse;
  session: SessionMessage;
  detailPosition: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private sessionService: SessionService,
    private examService: ExamService
  ) {
    this.exams = [];
  }

  ngOnInit() {
    this.getSession();
    this.courseId = parseInt(this.route.snapshot.paramMap.get('courseId'), 10);
    this.getStudentExamSummaries();
  }

  getSession() {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession.subscribe(
      session => {
        this.session = session;
      }
    );
  }

  getStudentExamSummaries() {
    this.examService.getStudentExamSummaries(this.session.userInfo.username, this.courseId).subscribe(
      exams => this.exams = exams,
      errorResponse => this.errorResponse = errorResponse);
  }

  takeExam(examId: number) {
    // TODO
  }
}
