import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../_services';
import { ExamService } from '../../_services/exam.service';
import { ExamMessage } from '../../_models/exam-message';
import { HttpErrorResponse } from '@angular/common/http';
import { ExamAnswerMessage } from '../../_models/exam-answer-message';
import { QuestionAnswerMessage } from '../../_models/question-answer-message';

@Component({
  selector: 'app-course-learn-exam',
  templateUrl: './course-learn-exam.component.html',
  styleUrls: ['./course-learn-exam.component.scss']
})
export class CourseLearnExamComponent implements OnInit {

  examId: number;
  exam: ExamMessage;
  answer: ExamAnswerMessage;
  errorResponse: HttpErrorResponse;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private examService: ExamService
  ) {
  }

  ngOnInit() {
    this.answer = new ExamAnswerMessage();
    this.answer.questionAnswers = [];
    this.examId = parseInt(this.route.snapshot.paramMap.get('examId'), 10);
    this.answer.examId = this.examId;
    this.getExam();
  }

  getExam() {
    this.examService.getExam(this.examId, 'false').subscribe(
      exam => {
        console.log('success');
        this.exam = exam;
        this.exam.questionMessages.forEach(
          (question) => {
            const questionAnswerMessage = new QuestionAnswerMessage();
            questionAnswerMessage.questionId = question.questionId;
            this.answer.questionAnswers.push(questionAnswerMessage);
          }
        );
      },
      errorResponse => this.errorResponse = errorResponse
    );
  }

  submitAnswer() {
    this.examService.submitAnswer(this.examId, this.answer).subscribe(
      () => {
        this.router.navigate([`..`], {
          relativeTo: this.route,
        });
      },
      errorResponse => this.errorResponse = errorResponse
    );
  }
}
