import { Component, OnInit, Input } from '@angular/core';
import { AnalyzeStockService } from '../services/analyze-stock.service';
import { Analysis } from '../models/analysis';

@Component({
  selector: 'app-stock-analyze',
  templateUrl: './stock-analyze.component.html',
  styleUrls: ['./stock-analyze.component.css']
})
export class StockAnalyzeComponent implements OnInit {
  @Input() stockSymbol: string;
  analysis: Analysis[];

  // TODO: Update these to make dynamic
  slowEMA = 15;
  fastEMA = 5;

  constructor(private analyzeStockService: AnalyzeStockService) { }

  ngOnInit() {
  }

  getAnalysis() {
    this.analyzeStockService.getStockAnalysis(this.stockSymbol, this.slowEMA, this.fastEMA).subscribe(reponse => this.analysis = reponse);
  }

}
