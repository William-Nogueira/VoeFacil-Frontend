import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  ],
  imports: [BrowserModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}