import { Component, OnInit, Input } from '@angular/core';
import { StockHistoryService } from '../services/stock-history.service';
import { StockHistory } from '../models/stockHistory';

import { StockSymbol } from '../models/stockSymbol';

const timeSeries = 'Time Series (Daily)';

@Component({
  selector: 'app-candle-stick-chart',
  templateUrl: './candle-stick-chart.component.html',
  styleUrls: ['./candle-stick-chart.component.css']
})
export class CandleStickChartComponent implements OnInit {
  @Input() inputSymbol: string;
  title = '';
  type = 'CandlestickChart';
  data = [
  ];
  options = {
    legend: 'none',
    candlestick: {
      fallingColor: { strokeWidth: 1, fill: '#a52714', stroke: '#000000' }, // red
      risingColor: { strokeWidth: 1, fill: '#0f9d58', stroke: '#000000' }  // green
    }
  };
  width = 1000;
  height = 500;
  stockSymbol: StockSymbol;
  public stockHistories: StockHistory[] = new Array();

  constructor(private stockHistoryService: StockHistoryService) { }

  ngOnInit() {
    if (this.inputSymbol != null) {
      const symbol = this.inputSymbol;
      this.stockSymbol = ({ symbol } as StockSymbol);
      this.getDailyData();
      this.title = symbol + ' last 50 days';
      // (document.getElementById('stockTable') as HTMLInputElement).hidden = false;
    }
  }
  getDailyData() {
    this.stockHistoryService.getStockHistoryFromApi(this.stockSymbol).subscribe(data => {
      const dailySet = data[timeSeries];

      Object.keys(dailySet).forEach(key => {
        const stockData: StockHistory = dailySet[key];
        stockData.Date = new Date(key);
        this.stockHistories.push(stockData);
      });

      this.populateTable();
      (document.getElementById('stockTable') as HTMLInputElement).hidden = false;
    });
  }

  populateTable() {
    const tableData = new Array();
    this.stockHistories.forEach(data => {
      let temp: any = new Object();
      if (data.Date.valueOf() > (Date.now() - (50 * 86400000))) {
        data.Date = new Date(data.Date.valueOf() + 86400000);
        temp = [data.Date, Number(data['3. low']), Number(data['1. open']), Number(data['4. close']), Number(data['2. high'])];
        // console.log(temp);
        tableData.push(temp);
      }
    });

    this.data = tableData;
  }
}
