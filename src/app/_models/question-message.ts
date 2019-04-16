import { QuestionOptionMessage } from './question-option-message';

export class QuestionMessage {
  examId: number;
  questionId: number;
  questionDetail: string;
  answerId: number;
  questionOptionMessages: QuestionOptionMessage[];
}
