import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ExperimentMessage} from '../_models/experiment-message';
import {ExperimentCreationMessage} from '../_models/experiment-creation-message';


@Injectable({
  providedIn: 'root'
})
export class ExperimentService {

  constructor(private httpClient: HttpClient) { }

  getCourseExperiment(courseId: number): Observable<ExperimentMessage[]> {
    return this.httpClient.get<ExperimentMessage[]>(`courses/${ courseId }/experiments`);
  }

  createCourseExperiment(courseId: number, experimentCreationMessage: ExperimentCreationMessage)
    : Observable<ExperimentMessage> {
    return this.httpClient.post<ExperimentMessage>(`courses/${ courseId }/experiments`
      , experimentCreationMessage);
  }
}
