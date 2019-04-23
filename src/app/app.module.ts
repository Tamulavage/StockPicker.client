import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WatchedStockComponent } from './watched-stock/watched-stock.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { StockSymbolComponent } from './stock-symbol/stock-symbol.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchedStockComponent,
    StockSymbolComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
