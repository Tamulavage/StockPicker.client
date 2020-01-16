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
    (document.getElementById('currentWatched') as HTMLInputElement).hidden = true;
    (document.getElementById('stockShortNameDiv') as HTMLInputElement).hidden = false;
    (document.getElementById('addWatched') as HTMLInputElement).hidden = true;
    (document.getElementById('endWatched') as HTMLInputElement).hidden = true;
    (document.getElementById('cancel') as HTMLInputElement).hidden = false;
    (document.getElementById('ok') as HTMLInputElement).hidden = false;
  }

  endCurrent(): void {
    (document.getElementById('currentWatched') as HTMLInputElement).hidden = true;
    (document.getElementById('currentWatchedToRemove') as HTMLInputElement).hidden = false;
  }

  endDate(stockToEnd: Watched): void {
    this.listOfWatched.splice(this.listOfWatched.indexOf(stockToEnd) , 1 ) ;

    const stockSymbol: any = stockToEnd.stockSymbol;
    this.watchedService.end(stockSymbol)
     .subscribe(item => this.watchStock = item);

    this.reset();
  }

  update(stockToAdd: string): void {

    const updatedWatched: Watched = new Watched();
    updatedWatched.stockSymbol = stockToAdd;
    updatedWatched.startWatch = this.getTodaysDate();
    this.watchedService.update(updatedWatched)
    .subscribe(item => this.watchStock = item);
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
    (document.getElementById('currentWatched') as HTMLInputElement).hidden = false;
    (document.getElementById('stockShortNameDiv') as HTMLInputElement).hidden = true;
    (document.getElementById('addWatched') as HTMLInputElement).hidden = false;
    (document.getElementById('endWatched') as HTMLInputElement).hidden = false;
    (document.getElementById('cancel') as HTMLInputElement).hidden = true;
    (document.getElementById('ok') as HTMLInputElement).hidden = true;
    (document.getElementById('currentWatchedToRemove') as HTMLInputElement).hidden = true;
  }
}
