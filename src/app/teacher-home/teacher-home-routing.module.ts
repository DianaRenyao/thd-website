import {Routes} from '@angular/router';
import {CourseManagementComponent} from './course-management/course-management.component';
import {NoticeManagementComponent} from './notice-management/notice-management.component';
import {ApplicationManagementComponent} from './application-management/application-management.component';
import {CourseDetailManagementComponent} from './course-detail-management/course-detail-management.component';
import {AddCourseComponent} from './course-management/add-course/add-course.component';
import {ExperimentManagementComponent} from "./experiment-management/experiment-management.component";

export const teacherHomeChildRoutes: Routes = [
  { path: '', redirectTo: 'notice-management', pathMatch: 'full' },
  { path: 'notice-management', component: NoticeManagementComponent },
  { path: 'course-management', component: CourseManagementComponent },
  { path: 'application-management', component: ApplicationManagementComponent },
  {path: 'course-management/:courseId', component: CourseDetailManagementComponent},
  {path: 'add-course', component: AddCourseComponent},
  { path: 'experiment-management', component: ExperimentManagementComponent}
];
