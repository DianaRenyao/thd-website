import { Routes } from '@angular/router';
import { StudentCheckScoreComponent } from './student-check-score/student-check-score.component';
import { StudentSelectedCoursesComponent } from './student-selected-courses/student-selected-courses.component';

export const studentHomeChildRoutes: Routes = [
  { path: '', redirectTo: 'selected-courses', pathMatch: 'full' },
  { path: 'selected-courses', component: StudentSelectedCoursesComponent },
  { path: 'scores', component: StudentCheckScoreComponent },
];
