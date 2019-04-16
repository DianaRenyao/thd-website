import { TeacherMessage } from './teacher-message';

export class NoticeMessage {
  noticeId: number;
  author: TeacherMessage;
  title: string;
  detail: string;
  timeCreated: Date;


}
