import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseUrlService } from '../_services';

// rewrite api base url
@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private baseUrlService: BaseUrlService,
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiRequest = req.clone({ url: `${ this.baseUrlService.baseUrl }/${ req.url }` });
    return next.handle(apiRequest);
  }
}
