import { Routes } from '@angular/router';
import { CourseLearnContentComponent } from './course-learn-content/course-learn-content.component';
import { CourseLearnSectionComponent } from './course-learn-section/course-learn-section.component';

export const courseLearnRouting: Routes = [
  { path: '', redirectTo: 'content', pathMatch: 'full' },
  { path: 'content', component: CourseLearnContentComponent },
  { path: 'chapters/:chapterSequence/sections/:sectionSequence', component: CourseLearnSectionComponent },
];
