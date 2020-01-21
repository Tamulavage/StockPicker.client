import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WatchedService } from '../services/watched.service';
import { Watched } from '../models/watched';
import { StockSymbol } from '../models/stockSymbol';

@Component({
  selector: 'app-watched-stock',
  templateUrl: './watched-stock.component.html',
  styleUrls: ['./watched-stock.component.css']
})
export class WatchedStockComponent implements OnInit {

  watchStock: Watched;
  listOfWatched: Watched[];

  showMainButton = true;
  showAddFeature = false;
  showRemoveFeature = false;

  @Output() reloadComponents: EventEmitter<string> = new EventEmitter<string>();

  constructor(private watchedService: WatchedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.watchedService.getWatchedStocks().subscribe(stock => this.listOfWatched = stock);
  }

  refreshData(stockSelected: string): string {
    this.reloadComponents.emit(stockSelected);
    return;
  }

  addNew(): void {
    this.showMainButton = false;
    this.showAddFeature = true;
  }

  endCurrent(): void {
    this.showMainButton = false;
    this.showRemoveFeature = true;
  }

  endDate(stockToEnd: Watched): void {
    this.listOfWatched.splice(this.listOfWatched.indexOf(stockToEnd) , 1 ) ;

    const stockSymbol: any = stockToEnd.stockSymbol;
    this.watchedService.end(stockSymbol)
     .subscribe(item => this.watchStock = item);

    this.reset();
  }

  update(stockToAdd: string, companyNameToAdd: string): void {

    const updatedWatched: Watched = new Watched();
    const stock: StockSymbol = new StockSymbol();
    stock.symbol = stockToAdd;
    stock.name = companyNameToAdd;
    updatedWatched.stockSymbol = stock;
    updatedWatched.startWatch = this.getTodaysDate();
    this.watchedService.update(updatedWatched)
      .subscribe(item => this.listOfWatched.push(item));
    this.refreshData(stockToAdd);
  }

  getTodaysDate(): string {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return yyyy + '-' + mm + '-' + dd;
  }

  reset(): void {
    this.cancel();
  }

  cancel(): void {
    this.showMainButton = true;
    this.showAddFeature = false;
    this.showRemoveFeature = false;
  }
}
