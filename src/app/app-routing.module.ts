import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {WatchedStockComponent} from './watched-stock/watched-stock.component';
import {StockSymbolComponent} from './stock-symbol/stock-symbol.component';

const routes: Routes = [
  {path: 'watched/', component: WatchedStockComponent},
  {path: 'symbol/', component: StockSymbolComponent},
  {path: 'history/', component: WatchedStockComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
