import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Analysis } from '../models/analysis';

@Injectable({
  providedIn: 'root'
})
export class AnalyzeStockService {

  // private baseUri = 'https://fathomless-depths-87543.herokuapp.com/watch';
  private baseUri = 'http://localhost:8080/watch';

  constructor(private http: HttpClient) { }

  getStockAnalysis(stockSymbol: string, slowEMA: number, fastEMA: number): Observable<Analysis[]> {
    const url = `${this.baseUri}/analyzeWatchedStock/?symbol=${stockSymbol}&slowEMA=${slowEMA}&fastEMA=${fastEMA}`;
    console.log(url);
    return this.http.get<Analysis[]>(url);
  }
}
