import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-repair-order-checkout',
  templateUrl: './repair-order-checkout.component.html',
  styleUrls: ['./repair-order-checkout.component.css']
})
export class RepairOrderCheckoutComponent implements OnInit {

  shippingFees;
  boxShippingFees = 150;


  WayId;

  constructor(private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.shippingFees = this.cartService.shippingFees;

    this.route.params.subscribe(params => {
      this.WayId = params['WayId'];   
    });

  }

}
