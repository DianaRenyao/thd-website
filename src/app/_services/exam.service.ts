import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeacherExamSummaryMessage} from '../_models/teacher-exam-summary-message';
import {ExamMessage} from '../_models/exam-message';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(
    private  http: HttpClient
  ) {
  }

  getTeacherExamSummaries(username: string, courseId: number): Observable<TeacherExamSummaryMessage[]> {
    return this.http.get<TeacherExamSummaryMessage[]>(`teachers/${username}/courses/${courseId}/exams`);
  }

  getExam(examId: number, withAnswerBoolean: string): Observable<ExamMessage> {
    return this.http.get<ExamMessage>(`exams/${examId}`, {
      params: {
        withAnswer: withAnswerBoolean
      }
    });
  }
}
