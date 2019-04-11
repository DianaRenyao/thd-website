import { TeacherMessage } from './teacher-message';
import {ChapterMessage} from './chapter-message';

export class CourseMessage {
  courseId: number;
  courseName: string;
  description: string;
  period: number;
  startDate: Date;
  finishDate: Date;
  teacher: TeacherMessage;
  chapters: ChapterMessage[];
}
