import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeatService } from 'src/app/services/seat.service';
import { SeatFlight } from 'src/app/models/interface';
import { FlightTicketService } from 'src/app/services/flight-ticket.service';
import { FlightService } from 'src/app/services/flight.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-seat-picker',
  templateUrl: './seat-picker.component.html',
  styleUrls: ['./seat-picker.component.css'],
})
export class SeatPickerComponent implements OnInit {
  flightId: string;
  seats: SeatFlight[] = [];
  selectedSeat: SeatFlight;
  flightPrice: number;
  airline: string;
  id: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private seatService: SeatService,
    private flightTicketService: FlightTicketService,
    private flightService: FlightService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.flightId = this.route.snapshot.paramMap.get('flightId');
    this.seatService.getSeats(this.flightId).subscribe((seats) => {
      this.seats = seats;
    });
    this.flightService.getFlightById(this.flightId).subscribe((flight) => {
      this.flightPrice = flight.basePrice;
      this.airline = flight.aircraft.airline;
    });
  }

  selectSeat(seat: SeatFlight) {
    this.selectedSeat = seat;
  }

  confirmSelection() {
    const passengerId = localStorage.getItem('userId');
    const ticket = {
      flightId: this.flightId,
      seatId: this.selectedSeat.seatId,
      passengerId,
    };
    this.flightTicketService
      .createFlightTicket(ticket)
      .subscribe((response) => {
        this.router.navigate(['/ticket', response.id]);
      });
  }

  back(): void {
    this.location.back();
  }
}
