import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FileSourceMessage } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }

  uploadFile(file: File): Observable<FileSourceMessage> {
    const formData = new FormData();
    formData.append('file', file, encodeURI(file.name));

    console.log('about to send file', formData.get('file'));
    return this.httpClient.post<FileSourceMessage>('static-files', formData);
  }
}
