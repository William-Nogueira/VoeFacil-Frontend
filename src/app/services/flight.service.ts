import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Flight, FlightResponse } from '../models/interface';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'http://localhost:8080/flight';

  private flightResultsSource = new BehaviorSubject<Flight[]>(
    this.getFlightResultsFromLocalStorage()
  );
  flightResults$ = this.flightResultsSource.asObservable();

  constructor(private http: HttpClient) {}

  getAllFlights(): Observable<FlightResponse> {
    return this.http.get<FlightResponse>(this.apiUrl);
  }

  getFlightById(flightId: string): Observable<Flight> {
    const flightUrl = `${this.apiUrl}/${flightId}`;
    return this.http.get<Flight>(flightUrl);
  }

  getAllDeals(): Observable<FlightResponse> {
    const dealsUrl = `${this.apiUrl}/deals`;
    return this.http.get<FlightResponse>(dealsUrl);
  }

  searchFlights(
    origin: string,
    destination: string,
    date: string,
    seatType: string
  ): Observable<FlightResponse> {
    const searchUrl = `${this.apiUrl}/filter`;
    const params = new HttpParams()
      .set('origin', origin)
      .set('destination', destination)
      .set('date', date)
      .set('seatType', seatType);

    return this.http.get<FlightResponse>(searchUrl, { params });
  }

  updateFlightResults(flights: Flight[]) {
    localStorage.setItem('flightResults', JSON.stringify(flights));
    this.flightResultsSource.next(flights);
  }

  getFlightResultsFromLocalStorage(): Flight[] {
    const flightResults = localStorage.getItem('flightResults');
    return flightResults ? JSON.parse(flightResults) : [];
  }
}
