import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  
  shippingFees = 75;
  LocatlItems = [];
  addToCart(products, quantity) {
    this.LocatlItems = [];
    if (localStorage.getItem('CartItems') !== null) {
      this.LocatlItems = this.getItems();
      const productExistInCart = this.LocatlItems.find(
        ({ id }) => id === products.id
      );
      if (!productExistInCart) {
        products.quantity = quantity;
        this.LocatlItems.push(products);
      } else {
        productExistInCart.quantity =
          Number(productExistInCart.quantity) + Number(quantity);
      }
    }
    localStorage.removeItem('CartItems');
    localStorage.setItem('CartItems', JSON.stringify(this.LocatlItems));
  }

  getItems() {
    return JSON.parse(localStorage.getItem('CartItems'));
  }

  clearCart() {
    localStorage.removeItem('CartItems');
  }

  clearCartItem(i) {
    var tempItems = [];
    tempItems = this.getItems();
    tempItems.splice(i, 1);
    localStorage.removeItem('CartItems');
    localStorage.setItem('CartItems', JSON.stringify(tempItems));
  }

  calcTotal() {
    if (this.getItems() != null)
      return this.getItems().reduce((acc) => (acc += 1), 0);
    return 0;
  }

  calcTotalPrice() {
    let totalPrice = 0;
    if (this.getItems() != null)
      this.getItems().forEach(element => {
        totalPrice += element['quantity'] * element['priceKr'];
      });
    return totalPrice;
  }

  constructor() {}
}
