import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-order-checkout',
  templateUrl: './order-checkout.component.html',
  styleUrls: ['./order-checkout.component.css']
})
export class OrderCheckoutComponent implements OnInit {
  CartItems = [];
  shippingFees;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.CartItems = this.cartService.getItems();
    this.shippingFees = this.cartService.shippingFees;
  }
  
  calcTotal() {
    return this.cartService.calcTotal();
  }

  calcTotalPrice() {
    return this.cartService.calcTotalPrice();
  }



}
