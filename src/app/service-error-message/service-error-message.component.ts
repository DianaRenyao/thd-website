import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceErrorMessageService } from '../_services';

@Component({
  selector: 'app-service-error-message',
  templateUrl: './service-error-message.component.html',
  styleUrls: ['./service-error-message.component.scss']
})
export class ServiceErrorMessageComponent implements OnInit {

  @Input()
  indicator: string;

  @Input()
  errorResponse: HttpErrorResponse;

  constructor(
    private errorMessageService: ServiceErrorMessageService
  ) {
  }

  get errorMessage(): string {
    return this.errorMessageService.getMessageOfResponse(this.errorResponse);
  }

  ngOnInit() {
  }

}
