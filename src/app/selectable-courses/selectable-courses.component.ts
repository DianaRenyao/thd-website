import { Component, OnInit } from '@angular/core';
import { CourseSummaryMessage } from '../_models/course-summary-message';
import { HttpErrorResponse } from '@angular/common/http';
import { CourseService } from '../_services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectable-courses',
  templateUrl: './selectable-courses.component.html',
  styleUrls: ['./selectable-courses.component.scss']
})
export class SelectableCoursesComponent implements OnInit {
  courseSummaryMessages: CourseSummaryMessage[];
  errorResponse: HttpErrorResponse;

  constructor(
    private courseService: CourseService,
    private router: Router
  ) {
  }

  getSelectableCourses(): void {
    this.courseService.getSelectableCourses().subscribe(
      courseSummaryMessages => this.courseSummaryMessages = courseSummaryMessages,
      errorResponse => this.errorResponse = errorResponse,
    );
  }

  ngOnInit() {
    this.courseSummaryMessages = [];
    this.getSelectableCourses();
  }

  onClick(courseSummaryMessage: CourseSummaryMessage): void {
    console.log('is selected');
<<<<<<< HEAD
    this.selectedCourseSummaryMessage = courseSummaryMessage;
=======
    this.router.navigate([`/course/${ courseSummaryMessage.courseId }`]);
>>>>>>> 741b3262ab41988427127b239453b9e6ceb5a5cf
  }
}
