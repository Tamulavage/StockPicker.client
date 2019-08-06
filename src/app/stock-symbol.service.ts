import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {StockSymbol} from "./stockSymbol";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StockSymbolService {

  private baseUri = 'https://fathomless-depths-87543.herokuapp.com';
  //private baseUri = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  getStockSymbol(): Observable<StockSymbol[]> {
    const url = `${this.baseUri}/symbol/`;
    return this.http.get<StockSymbol[]>(url);
  }

  addStockSymbol(symbol: StockSymbol) {
    const url = `${this.baseUri}/new`;
    return this.http.post<StockSymbol>(url, symbol, httpOptions);
  }

  removeStockSymbol(id: number) {
    const url = `${this.baseUri}/${id}`;
    return this.http.delete<StockSymbol>(url, httpOptions);
  }
}
