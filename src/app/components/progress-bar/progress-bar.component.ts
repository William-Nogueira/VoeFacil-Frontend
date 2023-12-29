import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  @Input() planeColor: string = '#646774';
  @Input() passengerColor: string = '#646774';
  @Input() seatColor: string = '#646774';
  @Input() paymentColor: string = '#646774';

  constructor() {}

  ngOnInit(): void {}
}
