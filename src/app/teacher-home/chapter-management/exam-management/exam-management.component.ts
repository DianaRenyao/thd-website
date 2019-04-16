import { Component, OnInit } from '@angular/core';
import { ChapterMessage } from '../../../_models/chapter-message';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService, SessionService } from '../../../_services';
import { HttpErrorResponse } from '@angular/common/http';
import { SessionMessage } from '../../../_models';
import { ExamService } from '../../../_services/exam.service';
import { TeacherExamSummaryMessage } from '../../../_models/teacher-exam-summary-message';

@Component({
  selector: 'app-exam-management',
  templateUrl: './exam-management.component.html',
  styleUrls: ['./exam-management.component.scss']
})
export class ExamManagementComponent implements OnInit {
  courseId: number;
  chapters: ChapterMessage[];
  exams: TeacherExamSummaryMessage[];
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
    this.chapters = [];
    this.exams = [];
    this.detailPosition = -1;
  }

  ngOnInit() {
    this.courseId = parseInt(this.route.snapshot.paramMap.get('courseId'), 10);
    this.getCourseChapters();
    this.getSession();
    this.getTeacherExamSummaries();
  }

  getTeacherExamSummaries() {
    this.examService.getTeacherExamSummaries(this.session.userInfo.username, this.courseId).subscribe(
      exams => this.exams = exams,
      errorResponse => this.errorResponse = errorResponse);
  }

  getCourseChapters() {
    this.courseService.getChapterOfCourse(this.courseId).subscribe(
      chapters => {
        this.chapters = chapters;
      },
      errorResponse => this.errorResponse = errorResponse
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

  toggleExamDetail(examId: number) {
    if (this.detailPosition === examId) {
      this.detailPosition = -1;
    } else {
      this.detailPosition = examId;
    }
  }

  goAddExam(chapterSequence: number) {
    console.log('is selected');
    this.router.navigate([`/teacher-home/add-exam/courses/${ this.courseId }/chapterSequence/${ chapterSequence }`]);
  }
}
