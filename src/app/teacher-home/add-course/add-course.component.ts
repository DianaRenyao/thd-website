import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CourseCreationMessage } from '../../_models/course-creation-message';
import { CourseService } from '../../_services';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  addCourseForm: FormGroup;
  errorResponse: HttpErrorResponse;

  constructor(
    private formBuilder: FormBuilder,
    private courseService: CourseService,
    private router: Router
  ) {
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.addCourseForm.controls;
  }

  ngOnInit() {
    this.addCourseForm = this.formBuilder.group({
      courseName: ['', Validators.required],
      description: ['', Validators.required],
      period: ['', Validators.required],
      startDate: ['', Validators.required],
      finishDate: ['', Validators.required],
    });
  }

  onSubmit() {
    this.courseService.addCourse({
      courseName: this.form.courseName.value,
      description: this.form.description.value,
      period: this.form.period.value,
      startDate: this.form.startDate.value,
      finishDate: this.form.finishDate.value,
    }).subscribe(
      (courseMessage: CourseCreationMessage) => {
        this.router.navigate(['/']);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errorResponse = errorResponse;
      }
    );
  }
}
