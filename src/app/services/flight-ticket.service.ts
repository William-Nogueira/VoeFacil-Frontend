import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightTicket } from 'src/app/models/interface';

@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root',
})
export class FlightTicketService {
  private apiUrl = 'http://localhost:8080/flight-ticket';

  constructor(private http: HttpClient) {}

  createFlightTicket(ticket: FlightTicket): Observable<FlightTicket> {
    return this.http.post<FlightTicket>(this.apiUrl, ticket);
  }

  getFlightTicketById(ticketId: string): Observable<any> {
    const ticketUrl = `${this.apiUrl}/${ticketId}`;
    return this.http.get(ticketUrl);
  }
}
