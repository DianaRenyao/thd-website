import { Component, Input, OnInit } from '@angular/core';
import {SectionMessage} from '../../../_models/section-message';

@Component({
  selector: 'app-section-management',
  templateUrl: './section-management.component.html',
  styleUrls: ['./section-management.component.scss']
})
export class SectionManagementComponent implements OnInit {

  @Input()
  courseId: number;
  @Input()
  chapterSequence: number;
  @Input()
  sections: SectionMessage;


  constructor() { }

  ngOnInit() {
  }

}
