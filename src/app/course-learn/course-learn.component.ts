import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService, SessionService } from '../_services';
import { CourseMessage, SessionMessage } from '../_models';
import { HttpErrorResponse } from '@angular/common/http';
import { LearningCourseService } from '../_services/learning-course.service';

@Component({
  selector: 'app-course-learn',
  templateUrl: './course-learn.component.html',
  styleUrls: ['./course-learn.component.scss']
})
export class CourseLearnComponent implements OnInit {

  session: SessionMessage;
  course: CourseMessage;
  errorResponse: HttpErrorResponse;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private sessionService: SessionService,
    private learningCourseService: LearningCourseService,
  ) {
  }

  ngOnInit() {
    this.getCourseDetail();
    this.getSession();
  }

  getCourseDetail() {
    const courseId: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.courseService.getCourseDetail(courseId)
      .subscribe(
        course => {
          this.course = course;
          this.learningCourseService.startLearning(this.course);
        },
        errorResponse => this.errorResponse = errorResponse,
      );
  }

  getSession() {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession.subscribe(
      session => {
        this.session = session;
      }
    );
  }

}
