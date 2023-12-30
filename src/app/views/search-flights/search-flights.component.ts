import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/services/flight.service';
import { Flight } from 'src/app/models/interface';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css'],
})
export class SearchFlightsComponent implements OnInit {
  results: Flight[] = [];
  origin: string = '';
  destination: string = '';
  date: string = '';
  seatType: string = 'ECONOMY';
  constructor(private router: Router, private flightService: FlightService) {}

  ngOnInit(): void {}

  currentDate = new Date();

  onSearch(event: Event) {
    event.preventDefault();

    this.flightService
      .searchFlights(this.origin, this.destination, this.date, this.seatType)
      .subscribe(
        (response) => {
          this.flightService.updateFlightResults(response.content);
          this.router.navigate(['/flights'], {
            queryParams: {
              origin: this.origin,
              destination: this.destination,
              date: this.date,
              seatType: this.seatType,
            },
          });
          console.log('Search results:', response);
        },
        (error) => {
          console.error('Search error:', error);
        }
      );
  }
}
