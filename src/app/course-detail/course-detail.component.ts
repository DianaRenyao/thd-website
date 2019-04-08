import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../_services/course.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CourseMessage } from '../_models';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {

  errorResponse: HttpErrorResponse;
  course: CourseMessage;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
  ) {
  }

  ngOnInit() {
    this.getCourseDetail();
  }

  getCourseDetail() {
    const courseId: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.courseService.getCourseDetail(courseId)
      .subscribe(
        course => this.course = course,
        errorResponse => this.errorResponse = errorResponse,
      );
  }
}
