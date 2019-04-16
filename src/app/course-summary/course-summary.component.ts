import { Component, Input, OnInit } from '@angular/core';
import { CourseSummaryMessage } from '../_models/course-summary-message';

@Component({
  selector: 'app-course-summary',
  templateUrl: './course-summary.component.html',
  styleUrls: ['./course-summary.component.scss']
})
export class CourseSummaryComponent implements OnInit {

  @Input() courseSummaryMessage: CourseSummaryMessage;

  constructor() {
  }

  ngOnInit() {
  }
}
