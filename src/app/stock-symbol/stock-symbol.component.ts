import { Component, OnInit } from '@angular/core';
import {StockSymbol} from '../models/stockSymbol';
import {StockSymbolService} from '../services/stock-symbol.service';

@Component({
  selector: 'app-stock-symbol',
  templateUrl: './stock-symbol.component.html',
  styleUrls: ['./stock-symbol.component.css']
})
export class StockSymbolComponent implements OnInit {

  stockSymbol: StockSymbol;
  stockSymbols: StockSymbol[];

  constructor(private stockSymbolService: StockSymbolService) { }

  ngOnInit() {
    this. stockSymbolService.getStockSymbol().subscribe(stock => this.stockSymbols = stock);
  }

}
