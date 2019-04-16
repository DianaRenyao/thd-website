import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionService } from '../_services';

// add jwt token to authorization header
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private sessionService: SessionService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentSession = this.sessionService.currentSessionValue;
    if (currentSession && currentSession.token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${ currentSession.token }`
        }
      });
    }

    return next.handle(request);
  }
}
