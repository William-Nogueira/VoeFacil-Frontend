export interface FlightResponse {
  content: Flight[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Flight {
  id: string;
  number: string;
  basePrice: number;
  availableSeatsAmount: number;
  departureTime: string;
  durationMinutes: number;
  durationFormatted?: string;
  status: string;
  delayed: boolean;
  deal: boolean;
  departureAirport: Airport;
  arrivalAirport: Airport;
  aircraft: Aircraft;
}

export interface Airport {
  id: string;
  name: string;
  code: string;
  country: string;
  city: string;
}

export interface Aircraft {
  id: string;
  airline: string;
  capacity: number;
}

export interface Passenger {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface SeatFlight {
  seatId: string;
  seatAvailability: boolean;
  seatNumber: number;
  seatClass: string;
}

export interface Seat {
  id: string;
  seatNumber: number;
  seatClass: string;
  aircraft: Aircraft;
}

export interface FlightTicket {
  id?: string;
  flightId: string;
  seatId: string;
  passengerId: string;
}

export interface GetFlightTicket {
  id: string;
  totalPrice: number;
  ticketNumber: string;
  reservationDate: string;
  canceled: boolean;
  flight: Flight;
  seat: Seat;
  passenger: Passenger;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
