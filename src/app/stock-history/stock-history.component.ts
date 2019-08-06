import {Component, OnInit} from '@angular/core';
import {StockHistoryService} from '../stock-history.service';
import {StockSymbol} from '../stockSymbol';
import {StockHistory} from '../stockHistory';

const timeSeries = 'Time Series (Daily)';

@Component({
    selector: 'app-stock-history',
    templateUrl: './stock-history.component.html',
    styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit {

    stockHistory: StockHistory;
    stockHistories: StockHistory[] = new Array();
    stockSymbol: StockSymbol;


    constructor(private stockHistoryService: StockHistoryService) {
    }

    ngOnInit() {
        // TODO : clean up data used for initial API analysis
        const symbol = 'JPM';
        this.stockSymbol = ({symbol} as StockSymbol);
        this.getDailyData();
    }

    getDailyData() {
        this.stockHistoryService.getStockHistoryFromApi(this.stockSymbol).subscribe(data => {
            const dailySet = data[timeSeries];

            Object.keys(dailySet).forEach(key => {
                const stockData: StockHistory = dailySet[key];
                stockData.Date = new Date(key);
                this.stockHistories.push(stockData);
            });

        });
    }

}
