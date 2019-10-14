import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WatchedService } from '../watched.service';
import { ActivatedRoute } from '@angular/router';
import { Watched } from '../watched';

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

  endDate(stockToEnd: string): void {
    const updatedWatched: Watched = new Watched();
    updatedWatched.stockSymbol = stockToEnd;
    // TODO: need to fix: removing last in array versus correct one.
    this.listOfWatched.splice(this.listOfWatched.indexOf(updatedWatched) , 1 ) ;

    this.watchedService.end(updatedWatched)
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
