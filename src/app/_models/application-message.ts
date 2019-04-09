import { CourseSummaryMessage } from './course-summary-message';
import { StudentMessage } from './student-message';
import { ApplicationState } from './application-state';

export class ApplicationMessage {
  courseSummary: CourseSummaryMessage;
  comment: string;
  student: StudentMessage;
  timeCreated: Date;
  state: ApplicationState;
}
