import {Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
// import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
})
export class TopMenuComponent implements OnInit {
  cartLength = [];

  constructor(
    private cartService: CartService,
  ) {  }

  ngOnInit(): void {
  }

  calcTotal() {
    if (this.cartService.getItems() != null)
      return this.cartService.getItems().reduce((acc) => (acc += 1), 0);
    return 0;
  }

}
