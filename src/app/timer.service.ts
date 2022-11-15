import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TimerService {
  constructor(public BitcoinService: BitcoinService) {}

  private timer: any;
  private counter: number = 0;

  start() {
    this.BitcoinService.updateTable();
    this.timer = setInterval(() => {
      this.counter++;
      if (this.counter == 60) {
        this.BitcoinService.updateTable();
        this.counter = 0;
      }
    }, 1000);
  }
}
