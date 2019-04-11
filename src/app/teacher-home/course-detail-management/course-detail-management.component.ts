import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-detail-management',
  templateUrl: './course-detail-management.component.html',
  styleUrls: ['./course-detail-management.component.scss']
})
export class CourseDetailManagementComponent implements OnInit {

  courseId: number;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.courseId = parseInt(this.route.snapshot.paramMap.get('courseId'), 10);
  }

}
