import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Watched} from './watched';


@Injectable({
  providedIn: 'root'
})
export class WatchedService {

  private baseUri = 'https://fathomless-depths-87543.herokuapp.com';
  //private baseUri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getWatchedStocks(): Observable<Watched[]> {
    const url = `${this.baseUri}/watch/`;
    return this.http.get<Watched[]>(url);
  }
}
