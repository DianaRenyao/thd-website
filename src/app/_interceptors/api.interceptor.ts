import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// rewrite api base url
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // TODO: replace this when using in production environment
<<<<<<< HEAD
    // const baseUrl = 'http://localhost:8080/spm_service_war/webapi';
    const baseUrl = 'http://localhost:8080/spm_service_war/webapi';
=======
    const baseUrl = 'http://localhost:8080/spm_service_war/webapi';

>>>>>>> 5a3e15293e32478ed3d1d57967c1a66d094c3b3b
    const apiRequest = req.clone({url: `${baseUrl}/${req.url}`});
    return next.handle(apiRequest);
  }
}
