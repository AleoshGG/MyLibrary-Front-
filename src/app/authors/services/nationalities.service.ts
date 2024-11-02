import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iNationality } from '../models/iNationality';

@Injectable({
  providedIn: 'root',
})
export class NationalitiesService {
  private url_base = 'http://3.218.139.134:3000/nationalities/';

  constructor(private _http: HttpClient) {}

  getNationalities(): Observable<iNationality[]> {
    return this._http.get<iNationality[]>(this.url_base);
  }
}
