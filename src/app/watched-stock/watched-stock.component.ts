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
    // this.refreshData();
  }


  refreshData(stockSelected: string): string {
    // console.log(stockSelected);
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
  }

  update(stockToAdd: string): void {

    const updatedWatched: Watched = new Watched();
    updatedWatched.stockSymbol = stockToAdd;
    this.watchedService.update(updatedWatched)
    .subscribe(item => this.watchStock = this.watchStock);
  }

  cancel(): void {
    (document.getElementById('currentWatched') as HTMLInputElement).hidden = false;
    (document.getElementById('stockShortNameDiv') as HTMLInputElement).hidden = true;
    (document.getElementById('cancel') as HTMLInputElement).hidden = true;
    (document.getElementById('ok') as HTMLInputElement).hidden = true;
  }
}
