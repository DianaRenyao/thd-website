import { Component, Input, OnInit } from '@angular/core';
import { FileSourceMessage } from '../_models';
import { BaseUrlService } from '../_services';

@Component({
  selector: 'app-learn-content',
  templateUrl: './learn-content.component.html',
  styleUrls: ['./learn-content.component.scss']
})
export class LearnContentComponent implements OnInit {

  @Input()
  fileSource: FileSourceMessage;

  constructor(
    private baseUrlService: BaseUrlService,
  ) {
  }

  get source() {
    return `${ this.baseUrlService.baseUrl }/static-files/${ this.fileSource.identifier }`;
  }

  get downloadSource() {
    return `${ this.baseUrlService.baseUrl }/static-files/${ this.fileSource.identifier }?download=true`;
  }

  ngOnInit() {
  }

}
