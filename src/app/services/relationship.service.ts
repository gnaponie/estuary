import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class RelationshipService {

  readonly apiUrl: string = environment.api;

  constructor(private http: HttpClient) { }

  getRelatedArtifacts(resource: string, uid: string, relationship: string): Observable<any> {
    return this.http.get(`${this.apiUrl}relationships/${resource}/${uid}/${relationship}`);
  }
}
