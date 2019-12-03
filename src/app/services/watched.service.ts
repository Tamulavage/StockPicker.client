import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Watched } from '../models/watched';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class WatchedService {

  // private baseUri = 'https://fathomless-depths-87543.herokuapp.com';
  private baseUri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getWatchedStocks(): Observable<Watched[]> {
    const url = `${this.baseUri}/watch/`;
    console.log(url);
    return this.http.get<Watched[]>(url);
  }

  update(watched: Watched) {
    const url = `${this.baseUri}/watch/new`;
    console.log(url);
    return this.http.post<Watched>(url, watched, httpOptions);
  }

  end(watched: Watched) {
    // console.log(watched);
    const url = `${this.baseUri}/watch/end/${watched.stockSymbol}`;
    console.log(url);
    return this.http.post<Watched>(url, watched, httpOptions);
  }
}
