
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get<T>(path: string): Observable<T> {
    return this.httpClient.get<T>(path, { 'observe': 'response' })
      .pipe(
        map((res) => {
          return res.body || {} as T;
        })
      );
  }
}


