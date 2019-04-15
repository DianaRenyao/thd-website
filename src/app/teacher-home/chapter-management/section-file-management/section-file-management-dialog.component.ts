import { Component, Inject, OnInit } from '@angular/core';
import { SectionMessage } from '../../../_models/section-message';
import { FileUploadService } from '../../../_services/file-upload.service';
import { HttpErrorResponse } from '@angular/common/http';
import { BaseUrlService, CourseService } from '../../../_services';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export class SectionFileManagementDialogData {
  section: SectionMessage;
  courseId: number;
  chapterSequence: number;
}

@Component({
  selector: 'app-section-file-management',
  templateUrl: './section-file-management-dialog.component.html',
  styleUrls: ['./section-file-management-dialog.component.scss']
})
export class SectionFileManagementDialogComponent implements OnInit {

  errorResponse: HttpErrorResponse;

  sectionMessage: SectionMessage;
  courseId: number;
  chapterSequence: number;

  displayedColumns = [
    'filename',
    'fileType',
    'identifier',
    'action',
  ];

  constructor(
    private fileUploadService: FileUploadService,
    private courseService: CourseService,
    private baseUrlService: BaseUrlService,
    public dialogRef: MatDialogRef<SectionFileManagementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: SectionFileManagementDialogData,
  ) {
    this.sectionMessage = data.section;
    this.courseId = data.courseId;
    this.chapterSequence = data.chapterSequence;
  }

  ngOnInit() {
  }

  getLinkTo(fileSource) {
    return `${ this.baseUrlService.baseUrl }/static-files/${ fileSource.identifier }`;
  }

  onFileUploaded(fileSource) {
    this.courseService.addSectionFile(
      this.courseId,
      this.chapterSequence,
      this.sectionMessage.sequence,
      fileSource.identifier)
      .subscribe(
        () => this.sectionMessage.fileSources = [
          ...this.sectionMessage.fileSources, fileSource
        ],
        errorResponse => this.errorResponse = errorResponse,
      );
  }

  onDelete(fileSource) {
    this.courseService.deleteSectionFile(
      this.courseId,
      this.chapterSequence,
      this.sectionMessage.sequence,
      fileSource.identifier
    ).subscribe(
      () => {
        const index = this.sectionMessage.fileSources.indexOf(fileSource);
        this.sectionMessage.fileSources.splice(index, 1);
        this.sectionMessage.fileSources = [...this.sectionMessage.fileSources];
      },
      errorResponse => this.errorResponse = errorResponse,
    );
  }
}
