import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  hamburgerActive = false;
  navMenuActive = false;

  toggleHamburger() {
    this.hamburgerActive = !this.hamburgerActive;
    this.navMenuActive = !this.navMenuActive;
  }

  closeNavMenu() {
    this.hamburgerActive = false;
    this.navMenuActive = false;
  }
}
