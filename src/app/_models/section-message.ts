import { FileSourceMessage } from './file-source-message';

export class SectionMessage {
  sectionId: number;
  chapterId: number;
  sequence: number;
  sectionName: string;
  fileSources: FileSourceMessage[];
}
