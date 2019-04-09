import {Component, Input, OnInit} from '@angular/core';
import {TeacherMessage} from '../_models';
import {HttpErrorResponse} from '@angular/common/http';
import {CourseSummaryMessage} from '../_models/course-summary-message';
import {CourseService} from '../_services/course.service';

@Component({
  selector: 'app-course-summary',
  templateUrl: './course-summary.component.html',
  styleUrls: ['./course-summary.component.scss']
})
export class CourseSummaryComponent implements OnInit {

  @Input()courseSummaryMessage: CourseSummaryMessage;

  constructor(
  ) { }

  ngOnInit() {
  }


  onClick() {
  }
}
