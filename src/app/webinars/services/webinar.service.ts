import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Webinar } from '../models/webinar';
import { Pager } from '../models/pager';

@Injectable()
export class WebinarService {
  private webinarsUrl = 'api/seminars';

  constructor(private http: HttpClient) {
  }

  getWebinars(): Observable<Pager<Webinar>> {
    return this.http.get<Pager<Webinar>>(this.webinarsUrl);
  }
}
