import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-cart',
  templateUrl: './client-cart.component.html',
  styleUrls: ['./client-cart.component.css'],
})
export class ClientCartComponent implements OnInit {
  CartItems = [];
  shippingFees;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.CartItems = this.cartService.getItems();
    this.shippingFees = this.cartService.shippingFees;
  }

  calcTotal() {
    return this.cartService.calcTotal();
  }

  calcTotalPrice() {
    return this.cartService.calcTotalPrice();
  }

  clearCart() {
    this.cartService.clearCart();
    this.CartItems = [];
    this.toastr.warning('Your Cart Cleard', 'Cart');
  }

  clearCartItem(i) {
    this.cartService.clearCartItem(i);
    this.CartItems.splice(i, 1);
  }
  increase(v) {
    v.quantity++;
    this.cartService.addToCart(v, 1);
  }
  decrease(v) {
    if (v.quantity > 0) {
      v.quantity--;
      this.cartService.addToCart(v, -1);
    }
  }

}
