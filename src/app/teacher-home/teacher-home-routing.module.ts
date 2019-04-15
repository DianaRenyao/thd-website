import {Routes} from '@angular/router';
import {ScoreManagementComponent} from './score-management/score-management.component';
import {CourseManagementComponent} from './course-management/course-management.component';
import {NoticeManagementComponent} from './notice-management/notice-management.component';
import {ApplicationManagementComponent} from './application-management/application-management.component';
import {CourseDetailManagementComponent} from './course-detail-management/course-detail-management.component';
import { AddCourseComponent } from './add-course/add-course.component';

export const teacherHomeChildRoutes: Routes = [
  { path: '', redirectTo: 'notice-management', pathMatch: 'full' },
  { path: 'notice-management', component: NoticeManagementComponent },
  { path: 'course-management', component: CourseManagementComponent },
  { path: 'score-management', component: ScoreManagementComponent },
  { path: 'application-management', component: ApplicationManagementComponent },
  {path: 'course-management/:courseId', component: CourseDetailManagementComponent},
  {path: 'add-course', component: AddCourseComponent}
];
