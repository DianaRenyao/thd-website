import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { TeacherMessage } from '../_models';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {
  addTeacherForm: FormGroup;
  errorResponse: HttpErrorResponse;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.addTeacherForm.controls;
  }

  static checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const password = group.controls.password.value;
    const passwordRepeated = group.controls.passwordRepeated.value;

    return password === passwordRepeated ? null : {notSame: true};
  }

  ngOnInit() {
    this.addTeacherForm = this.formBuilder.group({
      teacherNumber: ['', Validators.pattern(/^\d{10}$/)],
      password: ['', Validators.required],
      passwordRepeated: ['', Validators.required],
      realName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required, ],
      introduction: ['', Validators.required],
    }, {
      validators: [
        RegisterComponent.checkPasswords
      ]
    });
  }

  onSubmit() {
    this.userService.addTeacher({
      username: this.form.teacherNumber.value,
      password: this.form.password.value,
      realName: this.form.realName.value,
      email: this.form.email.value,
      phone: this.form.phone.value,
      introduction: this.form.introduction.value,
    }).subscribe(
      (teacherMessage: TeacherMessage) => {
        this.router.navigate(['/']);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errorResponse = errorResponse;
      }
    );
  }

}
