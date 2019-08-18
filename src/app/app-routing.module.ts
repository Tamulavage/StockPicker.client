import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WatchedStockComponent} from './watched-stock/watched-stock.component';
import {StockSymbolComponent} from './stock-symbol/stock-symbol.component';
import {PastTradesComponent} from './past-trades/past-trades.component';
import {TradeComponent} from './trade/trade.component';
import {StockInformationComponent} from './stock-information/stock-information.component';

const routes: Routes = [
  {path: 'watched/', component: WatchedStockComponent},
  {path: 'symbol/', component: StockSymbolComponent},
  {path: 'history/', component: WatchedStockComponent},
  {path: 'trade', component: TradeComponent},
  {path: 'trade', component: TradeComponent},
  {path: 'past', component: PastTradesComponent},
  {path: 'stock', component: StockInformationComponent},
  {path: 'stock/:stockId', component: StockInformationComponent}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
