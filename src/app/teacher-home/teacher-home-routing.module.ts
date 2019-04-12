import { Routes } from '@angular/router';
import { CourseManagementComponent } from './course-management/course-management.component';
import { NoticeManagementComponent } from './notice-management/notice-management.component';
import {ScoreManagementComponent} from './score-management/score-management.component';
export const teacherHomeChildRoutes: Routes = [
  { path: '', redirectTo: 'notice-management', pathMatch: 'full' },
  { path: 'notice-management', component: NoticeManagementComponent },
  { path: 'course-management', component: CourseManagementComponent },
  { path: 'score-management', component: ScoreManagementComponent },

];
