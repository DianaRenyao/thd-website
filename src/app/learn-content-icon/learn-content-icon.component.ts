import { Component, Input, OnInit } from '@angular/core';
import { FileSourceMessage } from '../_models';
import { FileType } from '../_models/file-type';
import { FileTypeService } from '../_services/file-type.service';

@Component({
  selector: 'app-learn-content-icon',
  templateUrl: './learn-content-icon.component.html',
  styleUrls: ['./learn-content-icon.component.scss']
})
export class LearnContentIconComponent implements OnInit {

  @Input()
  fileSource: FileSourceMessage;

  fileType = FileType;

  constructor(
    private fileTypeService: FileTypeService,
  ) {
  }

  get fileSourceType(): FileType {
    return this.fileTypeService.getFileType(this.fileSource);
  }

  ngOnInit() {
  }

}
