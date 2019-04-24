import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StockSymbol} from './stockSymbol';
import {Observable} from 'rxjs';
import {StockHistoryRawData} from './StockHistoryRawData';
import {tap} from 'rxjs/internal/operators/tap';




@Injectable({
  providedIn: 'root'
})
export class StockHistoryService {

  constructor(private http: HttpClient) { }

  private baseUri = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
  private apiKey = '&apikey=HNX418W2U7ARUI2F';

    getStockHistoryFromApi(stockSymbol: StockSymbol): Observable<StockHistoryRawData> {
    const url = `${this.baseUri}${stockSymbol.symbol}${this.apiKey}`;

    return this.http.get<StockHistoryRawData>(url)
        .pipe(
            tap(_ => console.log(_))
        );

  }
}
