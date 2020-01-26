import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PingService {
  // private baseUri = 'https://fathomless-depths-87543.herokuapp.com';
  private baseUri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  pingServer(): Observable<HttpResponse<string>> {
    const url = `${this.baseUri}/ping`;
    console.log(url);
    return this.http.get<string>(url, { observe: 'response' })
    .pipe(
       tap(_ => console.log( _.body))
    );
  }
}
