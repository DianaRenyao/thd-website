import { Routes } from '@angular/router';
import { CourseManagementComponent } from './course-management/course-management.component';
import { NoticeManagementComponent } from './notice-management/notice-management.component';

export const teacherHomeChildRoutes: Routes = [
  { path: '', redirectTo: 'notice-management', pathMatch: 'full' },
  { path: 'notice-management', component: NoticeManagementComponent },
  { path: 'course-management', component: CourseManagementComponent },

];
