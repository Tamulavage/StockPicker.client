import { Component , OnInit} from '@angular/core';
import { PingService } from './services/ping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'stockpicker';

  constructor(private ping: PingService) {}

  ngOnInit() {
    this.ping.pingServer().subscribe();
  }
}
