import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: {
    updated: string;
  };
  bpi: {
    [key in 'USD' | 'BRL']: {
      code: string;
      rate: string;
      rate_float: number;
    };
  };
}

@Injectable()
export class BitcoinService {
  constructor(private http: HttpClient) {}
  currentResponse: Response;
  updateList: Array<Response> = [];

  updateTable() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((date) => {
        if (!this.currentResponse) {
          this.updateList.push(date);
        } else if (
          date.bpi.BRL.rate_float !== this.currentResponse.bpi.BRL.rate_float
        ) {
          this.updateList.push(date);
        }
        this.currentResponse = date;
      });
  }
}
