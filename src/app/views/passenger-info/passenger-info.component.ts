import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PassengerService } from 'src/app/services/passenger.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css'],
})
export class PassengerInfoComponent implements OnInit {
  passengerForm: FormGroup;
  flightId: string;

  constructor(
    private passengerService: PassengerService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.flightId = this.route.snapshot.paramMap.get('flightId');
    this.passengerForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
    });
  }

  back(): void {
    this.location.back();
  }

  onSubmit() {
    if (this.passengerForm.valid) {
      this.passengerService
        .addPassenger(this.passengerForm.value)
        .subscribe((response) => {
          localStorage.setItem('userId', response.id);
          localStorage.setItem('flightId', this.flightId);
          this.router.navigate(['/', this.flightId, 'seats']);
        });
    }
  }
}
