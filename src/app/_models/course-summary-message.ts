import { TeacherMessage } from './teacher-message';

export class CourseSummaryMessage {
  courseId: number;
  courseName: string;
  descriptionSummary: string;
  period: number;
  startDate: Date;
  finishDate: Date;
  teacher: TeacherMessage;
}
