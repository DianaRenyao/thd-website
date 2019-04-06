import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { AdminConsoleComponent } from '../admin-console/admin-console.component';
import { StudentHomeComponent } from '../student-home/student-home.component';
import { TeacherHomeComponent } from '../teacher-home/teacher-home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin-console', component: AdminConsoleComponent },
  { path: 'student-home', component: StudentHomeComponent },
  { path: 'teacher-home', component: TeacherHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
