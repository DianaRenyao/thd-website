import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FileUploadService} from '../_services/file-upload.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private uploadFile: FileUploadService) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }


  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
      console.log(file);
    }
  }

  onSubmit() {
    const file: File = this.uploadForm.get('profile').value;
    console.log(file);
    if (this.checkFileType(file.name)) {
      return;
    }

    this.uploadFile.uploadFile(this.uploadForm.get('profile').value).subscribe();
  }

   checkFileType(name: string): boolean {
    console.log(name);
    const types = ['pdf', 'png', 'mp4'];
    const suffix = name.split('.');
    if (suffix.length === 1 || !types.includes(suffix[suffix.length - 1])) {
      console.log(name + ' name invalid');
      return true;
    }

    return false;
  }
}
