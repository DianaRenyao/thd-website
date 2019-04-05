import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../_services';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserInfoMessage } from '../_models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorResponse: HttpErrorResponse;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.registerForm.controls;
  }

  static checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const password = group.controls.password.value;
    const passwordRepeated = group.controls.passwordRepeated.value;

    return password === passwordRepeated ? null : { notSame: true };
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      studentNumber: ['', Validators.pattern(/^\d{10}$/)],
      password: ['', Validators.required],
      passwordRepeated: ['', Validators.required],
      realName: ['', Validators.required],
      nickname: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      college: [''],
      clazz: ['', Validators.required]
    }, {
      validators: [
        RegisterComponent.checkPasswords
      ]
    });
  }

  onSubmit() {
    this.userService.register({
      username: this.form.studentNumber.value,
      password: this.form.password.value,
      realName: this.form.realName.value,
      nickname: this.form.nickname.value,
      email: this.form.email.value,
      phone: this.form.phone.value,
      college: this.form.college.value,
      clazz: this.form.clazz.value,
    }).subscribe(
      (userInfo: UserInfoMessage) => {
        this.router.navigate(['/login']);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errorResponse = errorResponse;
      }
    );
  }
}
