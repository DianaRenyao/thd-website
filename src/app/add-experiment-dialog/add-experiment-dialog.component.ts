import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ExperimentService} from '../_services/experiment.service';
import {AlertService} from '../_services';

@Component({
  selector: 'app-add-experiment-dialog',
  templateUrl: './add-experiment-dialog.component.html',
  styleUrls: ['./add-experiment-dialog.component.scss']
})
export class AddExperimentDialogComponent implements OnInit {
  applyForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public courseId: number,
              private dialogRef: MatDialogRef<AddExperimentDialogComponent>,
              private formBuilder: FormBuilder,
              private experimentService: ExperimentService,
              private alertService: AlertService) {
    this.applyForm = formBuilder.group({
      name: [''],
      description: [''],
      startDate: [''],
      finishDate: ['']
    });
  }

  ngOnInit() {
  }

  get form() {
    return this.applyForm.controls;
  }

  onSubmit() {
    console.log('submit experiment');

    this.experimentService.createCourseExperiment(this.courseId, {
      experimentName: this.form.name.value,
      description: this.form.description.value,
      startDate: this.form.startDate.value,
      finishDate: this.form.finishDate.value
    }).subscribe(experimentMessage => {
        this.alertService.success('创建成功');
        this.dialogRef.close(experimentMessage);
      },
      errorResponse => {
        this.alertService.errorResponse('创建失败', errorResponse);
        this.dialogRef.close();
      });
    }

}
