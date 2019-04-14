import { Component, Input, OnInit } from '@angular/core';
import { SectionMessage } from '../../../_models/section-message';

@Component({
  selector: 'app-section-file-management',
  templateUrl: './section-file-management.component.html',
  styleUrls: ['./section-file-management.component.scss']
})
export class SectionFileManagementComponent implements OnInit {

  @Input()
  sectionMessage: SectionMessage;
  displayedColumns = [
    'filename',
    'fileType',
    'identifier',
    'action',
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
