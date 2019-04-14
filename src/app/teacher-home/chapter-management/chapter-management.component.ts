import { Component, Input, OnInit } from '@angular/core';
import { ChapterCreationMessage } from '../../_models/chapter-creation-message';
import { ChapterMessage } from '../../_models/chapter-message';
import { HttpErrorResponse } from '@angular/common/http';
import { CourseService } from '../../_services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapter-management',
  templateUrl: './chapter-management.component.html',
  styleUrls: ['./chapter-management.component.scss']
})
export class ChapterManagementComponent implements OnInit {

  @Input()
  courseId: number;
  newChapter: ChapterCreationMessage;
  chapters: ChapterMessage[];
  chaptersCount: number;
  errorResponse: HttpErrorResponse;
  addingPosition: number;
  selectedChapter: ChapterMessage;
  showingPosition: number;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {
    this.newChapter = new ChapterCreationMessage();
  }

  getCourseChapters() {
    this.courseService.getChapterOfCourse(this.courseId).subscribe(
      chapters => {
        this.chapters = chapters;
        this.chaptersCount = chapters.length;
      },
      errorResponse => this.errorResponse = errorResponse
    );
  }

  ngOnInit() {
    this.getCourseChapters();
  }

  addChapter(): void {
    this.courseService.addChapter(this.courseId, this.newChapter).subscribe(
      (newChapter: ChapterMessage) => {
        this.chapters.splice(newChapter.sequence, 0, newChapter);
        this.chapters.slice(newChapter.sequence + 1).forEach(c => c.sequence += 1);
        this.chaptersCount += 1;
      },
      (errorResponse: HttpErrorResponse) => {
        this.errorResponse = errorResponse;
      }
    );
    // clear old
    this.addingPosition = -1;
    this.newChapter.sequence = -1;
    this.newChapter.chapterName = '';
  }

  removeChapter() {
    // TODO
  }

  editChapter() {
    // TODO
  }

  toggleAdd(sequence: number) {
    if (this.addingPosition === sequence) {
      this.addingPosition = -1;
      this.newChapter.sequence = -1;
    } else {
      this.addingPosition = sequence;
      this.newChapter.sequence = sequence;
    }

  }
}
