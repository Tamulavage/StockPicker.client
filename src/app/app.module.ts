import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WatchedStockComponent } from './watched-stock/watched-stock.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { StockSymbolComponent } from './stock-symbol/stock-symbol.component';
import { StockHistoryComponent } from './stock-history/stock-history.component';
import { StockHistoryService } from './services/stock-history.service';
import { GoogleChartsModule } from 'angular-google-charts';
import { CandleStickChartComponent } from './candle-stick-chart/candle-stick-chart.component';
import { StockInformationComponent } from './stock-information/stock-information.component';
import { PastTradesComponent } from './past-trades/past-trades.component';
import { TradeComponent } from './trade/trade.component';


@NgModule({
  declarations: [
    AppComponent,
    WatchedStockComponent,
    StockSymbolComponent,
    StockHistoryComponent,
    CandleStickChartComponent,
    StockInformationComponent,
    PastTradesComponent,
    TradeComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    GoogleChartsModule
  ],
  providers: [StockHistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
