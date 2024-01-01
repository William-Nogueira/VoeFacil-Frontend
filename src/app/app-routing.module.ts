import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { FlightsComponent } from './containers/flights/flights.component';
import { PassengerComponent } from './containers/passenger/passenger.component';
import { SeatsComponent } from './containers/seats/seats.component';
import { TicketComponent } from './containers/ticket/ticket.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'flights', component: FlightsComponent },
  { path: ':flightId/passenger', component: PassengerComponent },
  { path: ':flightId/seats', component: SeatsComponent },
  { path: 'ticket/:ticketId', component: TicketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
