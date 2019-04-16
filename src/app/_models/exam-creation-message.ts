import { QuestionCreationMessage } from './question-creation-message';

export class ExamCreationMessage {
  chpaterId: number;
  questionsCreationMessages: QuestionCreationMessage[];
}
