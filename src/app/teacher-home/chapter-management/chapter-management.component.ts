import {Component, OnInit} from '@angular/core';
import {ChapterCreationMessage} from '../../_models/chapter-creation-message';
import {ChapterMessage} from '../../_models/chapter-message';
import {HttpErrorResponse} from '@angular/common/http';
import {CourseService} from '../../_services';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseCreationMessage} from '../../_models/course-creation-message';

@Component({
  selector: 'app-chapter-management',
  templateUrl: './chapter-management.component.html',
  styleUrls: ['./chapter-management.component.scss']
})
export class ChapterManagementComponent implements OnInit {

  newChapter: ChapterCreationMessage;
  chapters: ChapterMessage[];
  chaptersCount: number;
  errorResponse: HttpErrorResponse;
  addingPosition: number;
  selectedChapter: ChapterMessage;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {
    this.newChapter = new ChapterCreationMessage();
  }

  getCourseChapters() {
    const courseId: number = parseInt(this.route.snapshot.paramMap.get('courseId'), 10);
    this.courseService.getChapterOfCourse(courseId).subscribe(
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
    console.log('is clicked');
    const courseId: number = parseInt(this.route.snapshot.paramMap.get('courseId'), 10);
    console.log(courseId);
    console.log(this.newChapter);
    this.courseService.addChapter(courseId, this.newChapter).subscribe(
      (newChapter: ChapterCreationMessage) => {
        this.addingPosition = -1;
        this.getCourseChapters();
        this.router.navigate([`/teacher-home/chapter-management/${ courseId }`]);
        },
      (errorResponse: HttpErrorResponse) => {
        this.errorResponse = errorResponse;
      }
    )
  }

  removeChapter() {
    // TODO
  }

  editChapter() {
    // TODO
  }
}
