import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {StockSymbol} from './stockSymbol';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/internal/operators/tap';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class StockHistoryService {

  constructor(private http: HttpClient) {
  }

  private baseUri = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
  private apiKey = '&apikey=HNX418W2U7ARUI2F';

   getStockHistoryFromApi(stockSymbol: StockSymbol): Observable<any> {
    const url = `${this.baseUri}${stockSymbol.symbol}${this.apiKey}`;

    return this.http.get<any>(url)
        .pipe(
          //  tap(_ => console.log(_))
        )
        ;


  }
}
