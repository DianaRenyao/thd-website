import { ChapterSummaryMessage } from './chapter-summary-message';
import { ExamScoreMessage } from './exam-score-message';

export class StudentExamSummaryMessage {
  chapter: ChapterSummaryMessage;
  questionNum: number;
  examId: number;
  examScoreMessage: ExamScoreMessage;
}
