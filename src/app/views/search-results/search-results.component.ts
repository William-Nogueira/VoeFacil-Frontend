import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { Flight } from 'src/app/models/interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  flights: Flight[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  departureCity: string = '';
  arrivalCity: string = '';

  constructor(
    private flightService: FlightService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.flightService.flightResults$.subscribe((flights) => {
      this.flights = flights;
      if (this.flights.length > 0) {
        this.flights.forEach((flight) => {
          flight.durationFormatted = this.convertToHoursAndMinutes(
            flight.durationMinutes
          );
        });
        this.departureCity = this.flights[0].departureAirport.city;
        this.arrivalCity = this.flights[0].arrivalAirport.city;
      }
    });
  }

  back(): void {
    this.location.back();
  }

  convertToHoursAndMinutes(durationInMinutes: number): string {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}h ${minutes}m`;
  }
}
