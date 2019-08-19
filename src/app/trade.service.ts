import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trades } from './trades';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TradeService {
  private baseUri = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllTradedStocks(): Observable<Trades[]> {
    const url = `${this.baseUri}/rade/`;
    return this.http.get<Trades[]>(url);
  }
}
