import { Component, VERSION } from '@angular/core';
import { BitcoinService } from './bitcoin.service';
import { TimerService } from './timer.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'Luis Eduardo';
  lastname: string = 'Duarte';
  ra: string = '0050832021022';

  constructor(
    public BitcoinService: BitcoinService,
    public timer: TimerService
  ) {
    this.timer.start();
  }

  ngOnInit() {}
}
