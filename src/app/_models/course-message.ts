import {TeacherMessage} from './teacher-message';

export class CourseMessage {
  courseName: string ;
  description: string ;
  period: number ;
  startDate: Date;
  finishDate: Date;
  teacher: TeacherMessage;
}
