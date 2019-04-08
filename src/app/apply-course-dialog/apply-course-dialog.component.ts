import { Component, Inject, OnInit } from '@angular/core';
import { CourseMessage, SessionMessage } from '../_models';
import { AlertService, SessionService } from '../_services';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ApplicationService } from '../_services/application.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-apply-course',
  templateUrl: './apply-course-dialog.component.html',
  styleUrls: ['./apply-course-dialog.component.scss']
})
export class ApplyCourseDialogComponent implements OnInit {

  session: SessionMessage;
  applyForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public course: CourseMessage,
    private dialogRef: MatDialogRef<ApplyCourseDialogComponent>,
    private sessionService: SessionService,
    private applicationService: ApplicationService,
    private snakeBar: MatSnackBar,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
  ) {
    this.applyForm = formBuilder.group({
      comment: [''],
    });
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.applyForm.controls;
  }

  ngOnInit() {
    this.getSession();
  }

  getSession() {
    this.session = this.sessionService.currentSessionValue;
    this.sessionService.currentSession.subscribe(
      session => {
        this.session = session;
      }
    );
  }

  onSubmit() {
    this.applicationService
      .apply(this.session.userInfo.username, this.course.courseId, {
        comment: this.form.comment.value,
      })
      .subscribe(
        () => {
          this.alertService.success('申请成功');
          // this.snakeBar.open('申请成功');
          this.dialogRef.close();
        },
        errorResponse => {
          this.alertService.errorResponse('发送申请失败', errorResponse);
          this.dialogRef.close();
        },
      );
  }
}
