import { Component, Input, OnInit } from '@angular/core';
import { FileSourceMessage } from '../_models';
import { BaseUrlService } from '../_services';
import { FileTypeService } from '../_services/file-type.service';
import { FileType } from '../_models/file-type';

@Component({
  selector: 'app-learn-content',
  templateUrl: './learn-content.component.html',
  styleUrls: ['./learn-content.component.scss']
})
export class LearnContentComponent implements OnInit {

  @Input()
  fileSource: FileSourceMessage;

  fileType = FileType;

  pdfPage: number;

  constructor(
    private baseUrlService: BaseUrlService,
    private fileTypeService: FileTypeService,
  ) {
  }

  get source(): string {
    return `${ this.baseUrlService.baseUrl }/static-files/${ this.fileSource.identifier }`;
  }

  get downloadSource(): string {
    return `${ this.baseUrlService.baseUrl }/static-files/${ this.fileSource.identifier }?download=true`;
  }

  get fileSourceType(): FileType {
    return this.fileTypeService.getFileType(this.fileSource);
  }

  ngOnInit() {
  }


  pdfPreviousPage() {
    if (this.pdfPage !== 1) {
      this.pdfPage -= 1;
    }
  }

  pdfNextPage() {
    this.pdfPage += 1;
  }
}
