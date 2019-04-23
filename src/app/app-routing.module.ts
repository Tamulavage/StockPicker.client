import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WatchedStockComponent} from "./watched-stock/watched-stock.component";
import {StockSymbolComponent} from "./stock-symbol/stock-symbol.component";

const routes: Routes = [
  {path: 'watched/', component: WatchedStockComponent},
  {path: 'symbol/', component: StockSymbolComponent},
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})


export class AppRoutingModule { }
