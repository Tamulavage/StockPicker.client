import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-stock-information',
  templateUrl: './stock-information.component.html',
  styleUrls: ['./stock-information.component.css']
})
export class StockInformationComponent implements OnInit {
  stockSymbol: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     }

  ngOnInit() {
    this.route.params.subscribe(routeParams => this.stockSymbol = routeParams.stockId);
  }


  reload(e: string) {
    this.stockSymbol = e;
    this.router.navigate([`stock/${this.stockSymbol}`]);
}

}
