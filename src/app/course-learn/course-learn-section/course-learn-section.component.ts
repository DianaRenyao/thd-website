import { Component, OnInit } from '@angular/core';
import { CourseMessage } from '../../_models';
import { LearningCourseService } from '../../_services/learning-course.service';
import { ActivatedRoute } from '@angular/router';
import { ChapterMessage } from '../../_models/chapter-message';
import { SectionMessage } from '../../_models/section-message';

@Component({
  selector: 'app-course-learn-section',
  templateUrl: './course-learn-section.component.html',
  styleUrls: ['./course-learn-section.component.scss']
})
export class CourseLearnSectionComponent implements OnInit {

  course: CourseMessage;
  chapterSequence: number;
  sectionSequence: number;

  constructor(
    private route: ActivatedRoute,
    private learningCourseService: LearningCourseService,
  ) {
  }

  get chapter(): ChapterMessage {
    if (this.course) {
      return this.course.chapters[this.chapterSequence];
    } else {
      return null;
    }
  }

  get section(): SectionMessage {
    if (this.chapter) {
      return this.chapter.sections[this.sectionSequence];
    } else {
      return null;
    }
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
    this.chapterSequence = parseInt(this.route.snapshot.paramMap.get('chapterSequence'), 10);
    this.sectionSequence = parseInt(this.route.snapshot.paramMap.get('sectionSequence'), 10);
  }
}
