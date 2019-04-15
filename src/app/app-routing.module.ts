import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AdminConsoleComponent} from './admin-console/admin-console.component';
import {StudentHomeComponent} from './student-home/student-home.component';
import {TeacherHomeComponent} from './teacher-home/teacher-home.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {teacherHomeChildRoutes} from './teacher-home/teacher-home-routing.module';
import {adminConsoleChildRoutes} from './admin-console/admin-console-routing.module';
import {TeacherCheckscoreComponent} from './teacher-checkscore/teacher-checkscore.component';
import {CourseLearnComponent} from './course-learn/course-learn.component';
import {courseLearnRouting} from './course-learn/course-learn-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-console', component: AdminConsoleComponent, children: adminConsoleChildRoutes },
  { path: 'teacher-home', component: TeacherHomeComponent, children: teacherHomeChildRoutes },
  { path: 'student-home', component: StudentHomeComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  {path: 'courseStudent/:id', component: TeacherCheckscoreComponent},
  { path: 'course/:id/learn', component: CourseLearnComponent, children: courseLearnRouting },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
