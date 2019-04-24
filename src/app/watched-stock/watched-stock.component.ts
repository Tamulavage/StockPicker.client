import { Component, OnInit } from '@angular/core';
import {WatchedService} from '../watched.service';
import {ActivatedRoute} from '@angular/router';
import {Watched} from '../watched';

@Component({
  selector: 'app-watched-stock',
  templateUrl: './watched-stock.component.html',
  styleUrls: ['./watched-stock.component.css']
})
export class WatchedStockComponent implements OnInit {

  watchStock: Watched;
  listOfWatched: Watched[];

  constructor(private watchedService: WatchedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.watchedService.getWatchedStocks().subscribe(stock => this.listOfWatched = stock);
  }

}
