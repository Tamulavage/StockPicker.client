import { Component, OnInit } from '@angular/core';
import { StockHistoryService } from '../stock-history.service';
import { StockHistory } from '../stockHistory';
import { StockSymbol } from '../stockSymbol';
declare const ApexCharts: any;

const timeSeries = 'Time Series (Daily)';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public chartData: Object[];
  public primaryXAxis: Object;

  chart;

  public stockHistory: StockHistory;
  public stockHistories: StockHistory[] = new Array();
  stockSymbol: StockSymbol;

  ngOnInit(): void {
    // TODO: get Symbol from DB/watched
    const symbol = 'JPM';
    this.stockSymbol = ({ symbol } as StockSymbol);
    this.getDailyData();
  }

  constructor(private stockHistoryService: StockHistoryService) {
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
    });
  }

  populateTable(){
    const tableData = new Array();
    this.stockHistories.forEach(data =>
      {
        const temp: any = new Object();

        temp.x = data.Date;
        temp.y = [Number(data["1. open"]), Number(data["2. high"]), Number(data["3. low"]), Number(data["4. close"])];
        tableData.push(temp);
      });


    const options = {
      chart: {
        height: 350,
        type: 'line'
      },
      series: [{
        data: tableData
      }],
      stroke: {
        width: [1, 10]
      },
      xaxis: { type: 'datetime' }
    }

    this.chart=new ApexCharts(
      document.querySelector("#chart"),
      options
    );

    this.chart.render();
  }

}
