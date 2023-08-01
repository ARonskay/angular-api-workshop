import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarwarsService {
  private readonly apiUrl = 'https://swapi.dev/api/people/';

  constructor(private readonly http: HttpClient) {}

  getPeople(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
