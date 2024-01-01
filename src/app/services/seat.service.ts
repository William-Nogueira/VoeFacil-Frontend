import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SeatFlight } from 'src/app/models/interface';

@Injectable({
  providedIn: 'root',
})
export class SeatService {
  private apiUrl = 'http://localhost:8080/seat';

  constructor(private http: HttpClient) {}

  getSeats(flightId: string): Observable<SeatFlight[]> {
    return this.http.get<SeatFlight[]>(`${this.apiUrl}/${flightId}`);
  }
}
