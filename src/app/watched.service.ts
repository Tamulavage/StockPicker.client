import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Watched} from "./watched";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class WatchedService {

  private baseUri = 'https://fathomless-depths-87543.herokuapp.com';

  constructor(private http: HttpClient) { }

  getWatchedStocks(): Observable<Watched[]> {
    const url = `${this.baseUri}/watch/`;
    return this.http.get<Watched[]>(url);
  }
}
