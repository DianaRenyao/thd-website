import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploadService } from '../_services/file-upload.service';
import { FileSourceMessage } from '../_models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  uploadForm: FormGroup;
  errorMessage: string;
  errorResponse: HttpErrorResponse;

  @Output()
  uploaded = new EventEmitter<FileSourceMessage>();

  constructor(private formBuilder: FormBuilder,
              private uploadFile: FileUploadService) {
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      file: ['', Validators.required]
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
      console.log(file);
    }
    this.onSubmit();
  }

  onSubmit() {
    const file: File = this.uploadForm.get('file').value;
    if (this.checkFileType(file.name)) {
      return;
    }

    this.uploadFile.uploadFile(this.uploadForm.get('file').value)
      .subscribe(
        fileSource => this.uploaded.emit(fileSource),
        errorResponse => this.errorResponse = errorResponse,
      );
  }

  checkFileType(name: string): boolean {
    console.log(name);
    const types = ['pdf', 'mp4'];
    const suffix = name.split('.');
    if (suffix.length === 1 || !types.includes(suffix[suffix.length - 1])) {
      this.errorMessage = '文件类型必须为 pdf 或 mp4';
      return true;
    }
    return false;
  }
}
