import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { SearchFlightsComponent } from './views/search-flights/search-flights.component';
import { DealsComponent } from './views/deals/deals.component';
import { SearchResultsComponent } from './views/search-results/search-results.component';
import { FlightsComponent } from './containers/flights/flights.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { PassengerComponent } from './containers/passenger/passenger.component';
import { PassengerInfoComponent } from './views/passenger-info/passenger-info.component';
import { DatePipe } from './pipes/date-pipe.pipe';
import { SeatsComponent } from './containers/seats/seats.component';
import { SeatPickerComponent } from './views/seat-picker/seat-picker.component';
import { TicketComponent } from './containers/ticket/ticket.component';
import { FlightTicketComponent } from './views/flight-ticket/flight-ticket.component';
import { DeparturePipe } from './pipes/departure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchFlightsComponent,
    DealsComponent,
    SearchResultsComponent,
    FlightsComponent,
    ProgressBarComponent,
    PassengerComponent,
    PassengerInfoComponent,
    DatePipe,
    SeatsComponent,
    SeatPickerComponent,
    TicketComponent,
    FlightTicketComponent,
    DeparturePipe,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
