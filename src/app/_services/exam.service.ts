import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeacherExamSummaryMessage} from '../_models/teacher-exam-summary-message';
import {ExamMessage} from '../_models/exam-message';
import {StudentExamSummaryMessage} from '../_models/student-exam-summary-message';
import {ExamCreationMessage} from '../_models/exam-creation-message';

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

  getStudentExamSummaries(username: string, courseId: number): Observable<StudentExamSummaryMessage[]> {
    return this.http.get<StudentExamSummaryMessage[]>(`students/${username}/courses/${courseId}/exams`);
  }

  getExam(examId: number, withAnswerBoolean: string): Observable<ExamMessage> {
    return this.http.get<ExamMessage>(`exams/${examId}`, {
      params: {
        withAnswer: withAnswerBoolean
      }
    });
  }

  createExam(courseId: number, chapterSequence: number, examCreationMessage: ExamCreationMessage): Observable<ExamMessage> {
    return this.http.post<ExamMessage>(`courses/${courseId}/chapters/${chapterSequence}/exams`, examCreationMessage);
  }
}
