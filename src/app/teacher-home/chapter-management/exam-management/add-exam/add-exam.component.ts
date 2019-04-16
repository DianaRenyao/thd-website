import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ExamService} from '../../../../_services/exam.service';
import {ExamCreationMessage} from '../../../../_models/exam-creation-message';
import {QuestionCreationMessage} from '../../../../_models/question-creation-message';
import {HttpErrorResponse} from '@angular/common/http';
import {ExamMessage} from '../../../../_models/exam-message';
import {QuestionOptionCreationMessage} from '../../../../_models/question-option-creation-message';

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
  addOptionBoolean: boolean;
  questionnCreationMessage: QuestionCreationMessage;
  questionOptionCreationMessage: QuestionOptionCreationMessage;
  errorResponse: HttpErrorResponse;
  examMessage: ExamMessage;

  constructor(
    private route: ActivatedRoute,
    private examService: ExamService,
    private router: Router
  ) {
    this.questionNum = 0;
    this.addQuestionPosition = -1;
    this.examCreationMessage = new ExamCreationMessage();
    this.examCreationMessage.questionsCreationMessages = [];
    this.questionnCreationMessage = new QuestionCreationMessage();
    this.questionnCreationMessage.answerIndex = -1;
    this.questionOptionCreationMessage = new QuestionOptionCreationMessage();
    this.questionOptionCreationMessage.questionId = -1;
    this.addOptionBoolean = false;
  }

  ngOnInit() {
    this.courseId = parseInt(this.route.snapshot.paramMap.get('courseId'), 10);
    this.chapterSequence = parseInt(this.route.snapshot.paramMap.get('chapterSequence'), 10);
  }

  createExam() {
    this.examService.createExam(this.courseId, this.chapterSequence, this.examCreationMessage).subscribe(
      examMessage => this.examMessage = examMessage,
      errorResponse => this.errorResponse = errorResponse
    );
    this.router.navigate([`/teacher-home/exam-management/${this.courseId}`]);
  }

  addQuestion() {
    this.examCreationMessage.questionsCreationMessages.splice(this.addQuestionPosition, 0, this.questionnCreationMessage);
    this.questionnCreationMessage = new QuestionCreationMessage();
    this.questionnCreationMessage.answerIndex = -1;
    this.addQuestionPosition = -1;
  }

  addOption() {
    this.questionnCreationMessage.questionOptionCreationMessages.splice(this.questionnCreationMessage.questionOptionCreationMessages.length,
      0, this.questionOptionCreationMessage);
    console.log(this.questionnCreationMessage);
    this.questionOptionCreationMessage = new QuestionOptionCreationMessage();
    this.questionOptionCreationMessage.questionId = -1;
    this.addOptionBoolean = false;
  }

  toggleAddQuestionPosition(position: number) {
    console.log(position);
    if (this.addQuestionPosition === position) {
      this.addQuestionPosition = -1;
    } else {
      this.addQuestionPosition = position;
      this.questionnCreationMessage.questionOptionCreationMessages = [];
    }
  }

  toggleAddOptionBoolean() {
    if (this.addOptionBoolean) {
      this.addOptionBoolean = false;
    } else {
      this.addOptionBoolean = true;
    }
  }

  removeQuestion(i: number) {
    this.examCreationMessage.questionsCreationMessages.splice(i, 1);
  }

  removeOption(i: number) {
    this.questionnCreationMessage.questionOptionCreationMessages.splice(i, 1);
  }
}