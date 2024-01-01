import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Flight,
  GetFlightTicket,
  Passenger,
  Seat,
} from 'src/app/models/interface';
import { FlightTicketService } from 'src/app/services/flight-ticket.service';

@Component({
  selector: 'app-flight-ticket',
  templateUrl: './flight-ticket.component.html',
  styleUrls: ['./flight-ticket.component.css'],
})
export class FlightTicketComponent implements OnInit {
  ticketId: string;
  ticket: GetFlightTicket;
  flight: Flight;
  passenger: Passenger;
  seat: Seat;
  durationFormatted: string;

  constructor(
    private route: ActivatedRoute,
    private flightTicketService: FlightTicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ticketId = this.route.snapshot.paramMap.get('ticketId');
    this.getTicketDetails();
  }

  getTicketDetails() {
    this.flightTicketService.getFlightTicketById(this.ticketId).subscribe(
      (ticket) => {
        this.ticket = ticket;
        this.flight = ticket.flight;
        this.passenger = ticket.passenger;
        this.seat = ticket.seat;
        this.durationFormatted = this.convertToHoursAndMinutes(
          this.flight.durationMinutes
        );
      },
      (error) => {
        console.error('Error fetching ticket:', error);
      }
    );
  }

  convertToHoursAndMinutes(durationInMinutes: number): string {
    const hours = Math.floor(durationInMinutes / 60);
    const minutes = durationInMinutes % 60;
    return `${hours}h ${minutes}m`;
  }

  printTicket() {
    window.print();
  }

  back(): void {
    this.router.navigate(['']);
  }
}
