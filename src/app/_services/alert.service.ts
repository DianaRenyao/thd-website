import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { AlertMessage } from '../_models';
import { HttpErrorResponse } from '@angular/common/http';
import { ServiceErrorMessageService } from './service-error-message.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<AlertMessage>();
  private keepAfterNavigationChange = false;

  constructor(
    private router: Router,
    private serviceErrorMessageService: ServiceErrorMessageService,
  ) {
    // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next();
        }
      }
    });
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
  }

  errorResponse(indicator: string, errorResponse: HttpErrorResponse, keepAfterNavigationChange = false) {
    const errorMessage = this.serviceErrorMessageService.getMessageOfResponse(errorResponse);
    this.error(`${ indicator }：${ errorMessage }`, keepAfterNavigationChange);
  }

  get message(): Observable<AlertMessage> {
    return this.subject.asObservable();
  }
}
