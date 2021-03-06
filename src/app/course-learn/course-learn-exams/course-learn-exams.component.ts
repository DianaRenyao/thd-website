import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { CourseMessage, SessionMessage } from '../../_models';
import { StudentExamSummaryMessage } from '../../_models/student-exam-summary-message';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService, SessionService } from '../../_services';
import { ExamService } from '../../_services/exam.service';
import { LearningCourseService } from '../../_services/learning-course.service';


@Component({
  selector: 'app-course-learn-exams',
  templateUrl: './course-learn-exams.component.html',
  styleUrls: ['./course-learn-exams.component.scss']
})
export class CourseLearnExamsComponent implements OnInit {

  exams: StudentExamSummaryMessage[];
  errorResponse: HttpErrorResponse;
  session: SessionMessage;
  detailPosition: number;
  course: CourseMessage;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private sessionService: SessionService,
    private examService: ExamService,
    private learningCourseService: LearningCourseService,
  ) {
    this.exams = [];
  }

  ngOnInit() {
    this.getSession();
    this.course = this.learningCourseService.currentLearningCourseValue;
    if (this.course) {
      this.getStudentExamSummaries();
    }
    this.learningCourseService.currentLearningCourse.subscribe(
      c => {
        this.course = c;
        if (this.course) {
          this.getStudentExamSummaries();
        }
      },
    );
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
    this.examService.getStudentExamSummaries(this.session.userInfo.username, this.course.courseId).subscribe(
      exams => this.exams = exams,
      errorResponse => this.errorResponse = errorResponse);
  }

  takeExam(examId: number) {
    this.router.navigate([`${ examId }`], {
      relativeTo: this.route,
    });
  }
}
