import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessoriesService } from '../../Services/accessories.service';
import { CartService } from '../../Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accessories-single',
  templateUrl: './accessories-single.component.html',
  styleUrls: ['./accessories-single.component.css'],
})
export class AccessoriesSingleComponent implements OnInit {
  product;
  ProductId = '';
  videoUrl;
  pageURL;

  constructor(
    private _Activatedroute: ActivatedRoute,
    private accessoriesService: AccessoriesService,
    private cartService: CartService,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private router: Router,

  ) {
    this._Activatedroute.params.subscribe((params) => {
      this.ProductId = params['ProductId'];
    });
  }

  ngOnInit(): void {
    this.accessoriesService
      .GetProductByProductId(this.ProductId)
      .subscribe((data: any[]) => {
        this.product = data;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.product['youtubeUrl']
        );
      });
    this.pageURL = this.router.url;
  }

  AddToCart(product, quantity: Number) {
    this.cartService.addToCart(product, quantity);
    this.toastr.success('Your product has been added to the cart!', 'Cart');
  }
}
