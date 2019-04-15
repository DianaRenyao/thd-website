import { Component, OnInit } from '@angular/core';
import { CourseMessage } from '../../_models';
import { LearningCourseService } from '../../_services/learning-course.service';
import { SectionMessage } from '../../_models/section-message';
import { ChapterMessage } from '../../_models/chapter-message';

@Component({
  selector: 'app-course-learn-content',
  templateUrl: './course-learn-content.component.html',
  styleUrls: ['./course-learn-content.component.scss']
})
export class CourseLearnContentComponent implements OnInit {

  course: CourseMessage;

  constructor(
    private learningCourseService: LearningCourseService,
  ) {
  }

  ngOnInit() {
    this.course = this.learningCourseService.currentLearningCourseValue;
    this.learningCourseService.currentLearningCourse.subscribe(
      c => {
        this.course = c;
        console.log('course', this.course);
      },
    );
    console.log('course', this.course);
  }

  goSectionRouterLink(chapter: ChapterMessage, section: SectionMessage): string {
    return `../chapters/${ chapter.sequence }/sections/${ section.sequence }`;
  }

}
