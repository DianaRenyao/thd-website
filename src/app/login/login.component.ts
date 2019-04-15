import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService, SessionService} from '../_services';
import {first} from 'rxjs/internal/operators/first';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  private returnUrl: string;
  loginForm: FormGroup;
  errorResponse: HttpErrorResponse;


  constructor(
    private alertService: AlertService,
    private sessionService: SessionService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.sessionService.login({
      username: this.form.username.value,
      password: this.form.password.value,
    })
      .pipe(first())
      .subscribe(
        session => {
          this.router.navigate([this.returnUrl]);
          console.log('session: ', session);
        },
        (errorResponse: HttpErrorResponse) => {
          this.errorResponse = errorResponse;
        });
  }
}



