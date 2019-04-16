import {Routes} from '@angular/router';
import {CourseLearnContentComponent} from './course-learn-content/course-learn-content.component';
import {CourseLearnSectionComponent} from './course-learn-section/course-learn-section.component';
import {CourseLearnExamsComponent} from './course-learn-exams/course-learn-exams.component';
import {CourseLearnExamComponent} from './course-learn-exam/course-learn-exam.component';

export const courseLearnRouting: Routes = [
  {path: '', redirectTo: 'content', pathMatch: 'full'},
  {path: 'content', component: CourseLearnContentComponent},
  {path: 'chapters/:chapterSequence/sections/:sectionSequence', component: CourseLearnSectionComponent},
  {path: 'exams', component: CourseLearnExamsComponent},
  {path: 'takeExam/:examId', component: CourseLearnExamComponent},
];
