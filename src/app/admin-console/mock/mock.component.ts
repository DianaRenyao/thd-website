import { Component, OnInit } from '@angular/core';
import { AlertService, MockService } from '../../_services';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.scss']
})
export class MockComponent implements OnInit {

  errorResponse: HttpErrorResponse;

  constructor(
    private mockService: MockService,
    private alertService: AlertService,
  ) {
  }

  ngOnInit() {
  }


  createUserMockData() {
    this.mockService.createUserMockData().subscribe(
      () => this.alertService.success('创建模拟数据成功'),
      errorResponse => this.errorResponse = errorResponse,
    );
  }

  createCourseMockData() {
    this.mockService.createCourseMockData().subscribe(
      () => this.alertService.success('创建模拟数据成功'),
      errorResponse => this.errorResponse = errorResponse,
    );
  }
}
