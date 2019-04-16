import { StudentMessage } from './student-message';
import { CourseSummaryMessage } from './course-summary-message';

export class SelectedCourseMessage {
  student: StudentMessage;
  course: CourseSummaryMessage;
  avgOnlineScore: number;
  midScore: number;
  finalScore: number;
  totalScore: number;
}
