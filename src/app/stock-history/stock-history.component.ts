import {Component, OnInit} from '@angular/core';
import {StockHistoryService} from '../stock-history.service';
import {StockHistory} from '../stockHistory';
import {StockSymbol} from '../stockSymbol';
import {StockHistoryRawData} from '../StockHistoryRawData';

const timeSeries = 'Time Series (Daily)';

@Component({
    selector: 'app-stock-history',
    templateUrl: './stock-history.component.html',
    styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {

    stockHistory: StockHistory;
    stockHistoryRawData: StockHistoryRawData;
    stockHistories: StockHistory[];
    stockSymbol: StockSymbol;
    timeSeries: string;
    lastRefreshed: string;


    constructor(private stockHistoryService: StockHistoryService) {
    }

    ngOnInit() {
        const symbol = 'ACN';
        this.timeSeries = timeSeries;
        this.stockSymbol = ({symbol} as StockSymbol);
        this.stockHistoryService.getStockHistoryFromApi(this.stockSymbol).subscribe(stock => {
            this.stockHistoryRawData = stock;
            this.lastRefreshed = this.stockHistoryRawData['Meta Data']['3. Last Refreshed'];
            // this.stockHistories =  this.stockHistoryRawData['Time Series (Daily)']['2018-11-28'];
            this.stockHistory =  this.stockHistoryRawData['Time Series (Daily)']['2018-11-28'];
        });
    }

}
