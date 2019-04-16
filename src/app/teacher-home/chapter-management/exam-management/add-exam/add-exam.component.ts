import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../../../../_services/exam.service';
import { ExamCreationMessage } from '../../../../_models/exam-creation-message';
import { QuestionCreationMessage } from '../../../../_models/question-creation-message';
import { HttpErrorResponse } from '@angular/common/http';
import { QuestionOptionCreationMessage } from '../../../../_models/question-option-creation-message';
import { AlertService } from '../../../../_services';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss']
})
export class AddExamComponent implements OnInit {
  courseId: number;
  chapterSequence: number;
  questionNum: number;
  examCreationMessage: ExamCreationMessage;
  addQuestionPosition: number;
  questionCreationMessage: QuestionCreationMessage;
  questionOptionCreationMessage: QuestionOptionCreationMessage;
  errorResponse: HttpErrorResponse;

  constructor(
    private route: ActivatedRoute,
    private examService: ExamService,
    private router: Router,
    private alertService: AlertService,
  ) {
    this.questionNum = 0;
    this.addQuestionPosition = -1;
    this.examCreationMessage = new ExamCreationMessage();
    this.examCreationMessage.questionsCreationMessages = [];
    this.questionCreationMessage = new QuestionCreationMessage();
    this.questionCreationMessage.answerIndex = -1;
    this.questionOptionCreationMessage = new QuestionOptionCreationMessage();
    this.questionOptionCreationMessage.questionId = -1;
  }

  ngOnInit() {
    this.courseId = parseInt(this.route.snapshot.paramMap.get('courseId'), 10);
    this.chapterSequence = parseInt(this.route.snapshot.paramMap.get('chapterSequence'), 10);
  }

  createExam() {
    this.examService.createExam(this.courseId, this.chapterSequence, this.examCreationMessage).subscribe(
      () => {
        this.router.navigate(['../../..'], {
          relativeTo: this.route,
        }).then(
          () => this.alertService.success('新的考试已被成功创建'),
        );
      },
      errorResponse => this.errorResponse = errorResponse
    );
  }

  addQuestion() {
    this.examCreationMessage.questionsCreationMessages.splice(this.addQuestionPosition, 0, this.questionCreationMessage);
    this.questionCreationMessage = new QuestionCreationMessage();
    this.questionCreationMessage.answerIndex = -1;
    this.addQuestionPosition = -1;
  }

  addOption() {
    this.questionCreationMessage.questionOptionCreationMessages.splice(this.questionCreationMessage.questionOptionCreationMessages.length,
      0, this.questionOptionCreationMessage);
    console.log(this.questionCreationMessage);
    this.questionOptionCreationMessage = new QuestionOptionCreationMessage();
    this.questionOptionCreationMessage.questionId = -1;
  }

  toggleAddQuestionPosition(position: number) {
    console.log(position);
    if (this.addQuestionPosition === position) {
      this.addQuestionPosition = -1;
    } else {
      this.addQuestionPosition = position;
      this.questionCreationMessage.questionOptionCreationMessages = [];
    }
  }

  removeQuestion(i: number) {
    this.examCreationMessage.questionsCreationMessages.splice(i, 1);
  }

  removeOption(i: number) {
    this.questionCreationMessage.questionOptionCreationMessages.splice(i, 1);
  }
}
