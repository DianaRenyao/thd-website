import { Routes } from '@angular/router';
import { SelectableCoursesComponent } from '../selectable-courses/selectable-courses.component';
import { StudentCheckScoreComponent } from './student-check-score/student-check-score.component';

export const studentHomeChildRoutes: Routes = [
  { path: '', redirectTo: 'selectable-courses', pathMatch: 'full' },
  { path: 'selectable-courses', component: SelectableCoursesComponent },
  { path: 'scores', component: StudentCheckScoreComponent },
];
