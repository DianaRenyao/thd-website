import { Routes } from '@angular/router';
import { TeacherManagementComponent } from './teacher-management/teacher-management.component';
import { MockComponent } from './mock/mock.component';

export const adminConsoleChildRoutes: Routes = [
  { path: '', redirectTo: 'teacher-management', pathMatch: 'full' },
  { path: 'teacher-management', component: TeacherManagementComponent },
  { path: 'mock', component: MockComponent },
];
