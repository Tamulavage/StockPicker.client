import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trades } from '../models/trades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeService {

  // private baseUri = 'http://localhost:8080';
  private baseUri = 'https://fathomless-depths-87543.herokuapp.com';

  constructor(private http: HttpClient) { }

  getAllTradedStocks(): Observable<Trades[]> {
    const url = `${this.baseUri}/Trade/`;
    return this.http.get<Trades[]>(url);
  }
}
