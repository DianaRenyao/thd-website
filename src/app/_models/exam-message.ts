import {QuestionMessage} from './question-message';

export class ExamMessage {
  examId: number;
  chapterId: number;
  questionMessages: QuestionMessage[];
}
