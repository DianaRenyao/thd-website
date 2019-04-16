import { QuestionAnswerMessage } from './question-answer-message';

export class ExamAnswerMessage {
  examId: number;
  questionAnswers: QuestionAnswerMessage[];
}
