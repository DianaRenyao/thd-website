import {SectionMessage} from './section-message';

export class ChapterMessage {
  chapterId: number;
  courseId: number;
  chapterName: string;
  sequence: number;
  sections: Array<SectionMessage>;
}
