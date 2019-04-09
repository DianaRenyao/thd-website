import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorIntl,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { TeacherCheckscoreComponent } from './teacher-checkscore/teacher-checkscore.component';
import { StudentCheckscoreComponent } from './student-checkscore/student-checkscore.component';
import { MatButtonModule } from '@angular/material/button';
import { UserIndicatorComponent } from './user-indicator/user-indicator.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiInterceptor, JwtInterceptor } from './_interceptors';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditsComponent } from './credits/credits.component';
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { LogoutComponent } from './logout/logout.component';
import { AddTeacherComponent } from './admin-console/teacher-management/add-teacher/add-teacher.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ServiceErrorMessageComponent } from './service-error-message/service-error-message.component';
import { AddCourseComponent } from './teacher-home/course-management/add-course/add-course.component';
import { TeacherListComponent } from './admin-console/teacher-management/teacher-list/teacher-list.component';
import { CourseSummaryComponent } from './course-summary/course-summary.component';
import { SelectableCoursesComponent } from './selectable-courses/selectable-courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { NoticeComponent } from './notice/notice.component';
import { UserReferenceComponent } from './user-reference/user-reference.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AddNoticeComponent } from './teacher-home/notice-management/add-notice/add-notice.component';
import { NoticeListComponent } from './teacher-home/notice-management/notice-list/notice-list.component';
import { NoticesComponent } from './notices/notices.component';
import { CustomMatPaginatorIntl } from './_internationalization/custom-mat-paginator-intl';
import { TeacherManagementComponent } from './admin-console/teacher-management/teacher-management.component';
import { CourseManagementComponent } from './teacher-home/course-management/course-management.component';
import { NoticeManagementComponent } from './teacher-home/notice-management/notice-management.component';
import { ApplyCourseDialogComponent } from './apply-course-dialog/apply-course-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserIndicatorComponent,
    LoginComponent,
    HomeComponent,
    CreditsComponent,
    AlertComponent,
    RegisterComponent,
    StudentHomeComponent,
    TeacherHomeComponent,
    AdminConsoleComponent,
    LogoutComponent,
    AddTeacherComponent,
    ErrorMessageComponent,
    StudentCheckscoreComponent,
    ServiceErrorMessageComponent,
    ServiceErrorMessageComponent,
    AddCourseComponent,
    TeacherListComponent,
    CourseSummaryComponent,
    SelectableCoursesComponent,
    CourseDetailComponent,
    TeacherCheckscoreComponent,
    NoticeComponent,
    UserReferenceComponent,
    TeacherComponent,
    TeachersComponent,
    AddNoticeComponent,
    NoticeListComponent,
    NoticesComponent,
    TeacherManagementComponent,
    CourseManagementComponent,
    NoticeManagementComponent,
    ApplyCourseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatListModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }
  ],
  entryComponents: [
    ApplyCourseDialogComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
