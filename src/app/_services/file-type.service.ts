import { Injectable } from '@angular/core';
import { FileSourceMessage } from '../_models';
import { FileType } from '../_models/file-type';

@Injectable({
  providedIn: 'root'
})
export class FileTypeService {

  constructor() {
  }

  getFileType(fileSource: FileSourceMessage): FileType {
    switch (fileSource.fileType) {
      case 'video/mp4':
        return FileType.Video;
      case 'application/pdf':
        return FileType.Pdf;
      default:
        return FileType.Unknown;
    }
  }
}
