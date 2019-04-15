import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  constructor() {
  }

  get baseUrl() {
    // return 'http://114.115.159.56:8080/spm-service/webapi';
     return 'http://localhost:8080/spm_service_war_exploded/webapi';
  }
}
