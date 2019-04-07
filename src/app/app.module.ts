import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './_services/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatTableModule,
  MatSortModule} from '@angular/material';
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
<<<<<<< HEAD
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { ServiceErrorMessageComponent } from './service-error-message/service-error-message.component';
import { StudentCheckscoreComponent } from './student-checkscore/student-checkscore.component';
=======
import { StudentCheckscoreComponent } from './student-checkscore/student-checkscore.component';
import { CdkTableModule } from "@angular/cdk/table";
import { MatTableModule } from '@angular/material';
>>>>>>> 5a3e15293e32478ed3d1d57967c1a66d094c3b3b

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
<<<<<<< HEAD
    AddTeacherComponent,
    ErrorMessageComponent,
    ServiceErrorMessageComponent,
=======
>>>>>>> 5a3e15293e32478ed3d1d57967c1a66d094c3b3b
    StudentCheckscoreComponent
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
<<<<<<< HEAD
    MatSidenavModule,
    MatTableModule,
    MatSortModule
=======
    CdkTableModule,
    MatTableModule
>>>>>>> 5a3e15293e32478ed3d1d57967c1a66d094c3b3b
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
