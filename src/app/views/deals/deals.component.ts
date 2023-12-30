import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightResponse } from 'src/app/models/interface';
import { Flight } from 'src/app/models/interface';

import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent implements OnInit {
  deals: Flight[] = [];
  sub: any;

  constructor(private flightService: FlightService) {}

  ngOnInit(): void {
    this.getDeals();
  }

  getDeals(): void {
    this.sub = this.flightService.getAllDeals().subscribe(
      (response: FlightResponse) => {
        this.deals = response.content;
      },
      (error) => {
        console.error('Error fetching deals:', error);
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
