import {QuestionOptionCreationMessage} from './question-option-creation-message';

export class QuestionCreationMessage {
  examId: number;
  detail: string;
  questionOptionCreationMessages: QuestionOptionCreationMessage[];
  answerIndex: number;
  answerId: number;
}
