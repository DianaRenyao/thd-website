import { Component, Input, OnInit } from '@angular/core';
import { SectionMessage } from '../../../_models/section-message';
import { SectionCreationMessage } from '../../../_models/section-creation-message';
import { SectionEditingMessage } from '../../../_models/section-editing-message';
import { CourseService } from '../../../_services';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SectionFileManagementDialogComponent } from '../section-file-management/section-file-management-dialog.component';

@Component({
  selector: 'app-section-management',
  templateUrl: './section-management.component.html',
  styleUrls: ['./section-management.component.scss']
})
export class SectionManagementComponent implements OnInit {

  @Input()
  courseId: number;
  @Input()
  chapterSequence: number;
  @Input()
  sections: SectionMessage[];

  newSection: SectionCreationMessage;
  editingSection: SectionEditingMessage;
  errorResponse: HttpErrorResponse;
  addingPosition: number;
  editingPosition: number;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private matDialog: MatDialog,
  ) {
    this.newSection = new SectionCreationMessage();
    this.editingSection = new SectionEditingMessage();
  }

  ngOnInit() {
  }

  addSection() {
    this.courseService.addSection(this.courseId, this.chapterSequence, this.newSection).subscribe(
      (newSection: SectionMessage) => {
        this.sections.splice(newSection.sequence, 0, newSection);
        this.sections.slice(newSection.sequence + 1).forEach(c => c.sequence += 1);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errorResponse = errorResponse;
      }
    );
    // clear old
    this.addingPosition = -1;
    this.newSection.sequence = -1;
    this.newSection.sectionName = '';
  }

  editSection() {
    this.courseService.editSection(this.courseId, this.chapterSequence, this.editingPosition, this.editingSection).subscribe(
      (editedSection: SectionMessage) => {
        this.sections[editedSection.sequence].sectionName = editedSection.sectionName;
      },
      (errorResponse: HttpErrorResponse) => {
        this.errorResponse = errorResponse;
      });
    // clear old
    this.editingPosition = -1;
    this.editingSection.sectionName = null;
  }

  removeSection(sequence: number) {
    this.courseService.deleteSection(this.courseId, this.chapterSequence, sequence).subscribe(
      () => {
        this.sections.splice(sequence, 1);
        this.sections.slice(sequence).forEach(c => c.sequence -= 1);
      },
      (errorResponse: HttpErrorResponse) => {
        this.errorResponse = errorResponse;
      }
    )
    ;
  }

  toggleAdd(sequence: number) {
    if (this.addingPosition === sequence) {
      this.addingPosition = -1;
      this.newSection.sequence = -1;
    } else {
      this.addingPosition = sequence;
      this.newSection.sequence = sequence;
    }
  }

  toggleEdit(sequence: number, name: string) {
    if (this.editingPosition === sequence) {
      this.editingPosition = -1;
      this.editingSection.sectionName = null;
    } else {
      this.editingPosition = sequence;
      this.editingSection.sectionName = name;
    }
  }

  onEditFile(section: SectionMessage) {
    this.matDialog.open(SectionFileManagementDialogComponent, {
      data: {
        section,
        courseId: this.courseId,
        chapterSequence: this.chapterSequence,
      }
    });
  }
}
