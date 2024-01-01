// passenger.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passenger } from 'src/app/models/interface';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  private apiUrl = 'http://localhost:8080/passenger';

  constructor(private http: HttpClient) {}

  addPassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>(this.apiUrl, passenger);
  }
}
